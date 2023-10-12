import React, { useEffect, useState } from 'react'

import { Button } from 'shared/ui'

interface BugButtonProps {
    className?: string
}

const BugButton = () => {
    const [error, setError] = useState(false)

    const onError = () => { setError(true) }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return (
        <Button onClick={onError}
        >
            throw Error
        </Button>
    )
}

export default BugButton
