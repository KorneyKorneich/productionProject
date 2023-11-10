import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next';

interface ArticleDetailsProps {
    className?: string
}

const ArticleDetails = ({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('ArticleDetails', {}, [className])}>
            Article Details
        </div>
    );
};

export default ArticleDetails;
