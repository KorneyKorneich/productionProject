import React from 'react'
import { classNames } from '../../lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
