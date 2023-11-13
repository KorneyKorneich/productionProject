import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamycModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article';
import ArticleCodeBlockComponent from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleTextBlockComponent from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const reducers: ReducersList = {
        articlesDetails: articleDetailsReducer
    }
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;

            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;

            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;

            default:
                return null;
        }
    }, [])

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [id, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
            </>
        )
    } else if (error) {
        content = (<Text
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
            title={t('Произошла непредвиденная ошибка')}
        />)
    } else {
        content = (<>
            <div className={cls.avatarWrapper} >
                <Avatar className={cls.avatar} size={200} src={article?.img}/>
            </div>
            <Text
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />

            <div className={cls.articleInfo}>
                <EyeIcon className={cls.icon}/>
                <Text text={String(article?.views)}/>
            </div>
            <div className={cls.articleInfo}>
                <CalendarIcon className={cls.icon}/>
                <Text text={article?.createdAt}/>
            </div>
            {article?.blocks?.map(renderBlock)}
        </>)
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
