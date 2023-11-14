import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamycModuleLoader/DynamicModuleLoader';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui';
import { useSelector } from 'react-redux';
import {
    ArticleCommentReducer,
    getArticleComment,
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from 'features/ArticleCommentList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchCommentsByArticleId
} from 'features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComment.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    if (!id) {
        return <div>{t('Статья не найдена')}</div>
    }

    const reducers: ReducersList = {
        articleComments: ArticleCommentReducer
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('ArticleDetailsPage', {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Коментарии')} />
                <CommentList isLoading={commentsIsLoading} comments={comments}/>
            </div>
        </DynamicModuleLoader>
    )
}

export default ArticleDetailsPage;
