import { classNames } from 'shared/lib/classNames/classNames'
import { FC, memo } from 'react'
import { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
    className?: string
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const { className, children, to, ...otherProps } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
