import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next';

interface ArticlePageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('ArticlePage', {}, [className])}>
            Article page
        </div>
    );
};

export default memo(ArticlesPage);
