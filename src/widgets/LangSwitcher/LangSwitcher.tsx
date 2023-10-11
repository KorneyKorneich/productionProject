import React from 'react'
import { classNames } from 'app/shared/lib/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import { ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const handleTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div >
            <Button className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={handleTranslate}
            >{t('Язык')}
            </Button>

        </div>
    )
}

export default LangSwitcher
