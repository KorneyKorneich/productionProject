import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>{t('Статья не найдена')}</div>
    }

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('ArticleDetailsPage', {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
};

export default ArticleDetailsPage;
