import ErrorPage from './pages/404Page'
import Home from './pages/dashboard/home'
import { RouteObject } from 'react-router-dom'
// import ProtectedRoute from './ProtectedRoutes'
// import { AppCheck } from './middleware/middleware'
// import { ERoleType } from './types/selector.types'
import DashboardLayout from './layouts/dashboard.layout'
import Reporters from './pages/dashboard/reporters'

const generateRoutes = (): RouteObject[] => {
    // const allowedRoles = {
    //     home: [ERoleType.GUINNESS],
    //     pledge: [ERoleType.GUINNESS]
    // }

    return [
        {
            path: '/app',
            element: (
                // <AppCheck>
                <DashboardLayout />
                // </AppCheck>
            ),
            children: [
                {
                    path: 'home',
                    element: (
                        // <ProtectedRoute allowedRoles={allowedRoles.home}>
                        <Home />
                        // </ProtectedRoute>
                    )
                },
                {
                    path: 'reporters',
                    element: (
                        // <ProtectedRoute allowedRoles={allowedRoles.pledge}>
                        <Reporters />
                        // </ProtectedRoute>
                    )
                },

                {
                    path: '*',
                    element: <ErrorPage />
                }
            ]
        }
    ]
}

export default generateRoutes
