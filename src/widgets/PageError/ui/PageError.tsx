import React, { useEffect } from 'react'
import { classNames } from 'app/shared/lib/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
    className?: string
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>
                {t('Что-то пошло не так')}
            </p>
        </div>
    )
}

export default PageError
