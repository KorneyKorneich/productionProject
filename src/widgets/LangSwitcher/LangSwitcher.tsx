import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const handleTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div >
            <Button className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={handleTranslate}
            >{t(short ? 'Короткий язык' : 'Язык')}
            </Button>

        </div>
    )
})

export default LangSwitcher
