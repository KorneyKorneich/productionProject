import React, { useEffect, useState } from 'react'

import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next';

// interface BugButtonProps {
//     className?: string
// }

const BugButton = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation();
    const onError = () => { setError(true) }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return (
        <Button onClick={onError}
        >
            {t('Выбросить ошибку')}
        </Button>
    )
}

export default BugButton
