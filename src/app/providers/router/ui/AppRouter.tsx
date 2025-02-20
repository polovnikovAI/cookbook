import { classNames } from 'shared/lib/classNames/classNames'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from 'shared/ui/Loader/Loader'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

interface AppRouterProps {
    className?: string
}

export const AppRouter = (props: AppRouterProps) => {
    const { className } = props

    return (
        <div className={classNames('AppRouter', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}
