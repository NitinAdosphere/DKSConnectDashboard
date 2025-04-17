import ErrorPage from './pages/404Page'
import Home from './pages/dashboard/home'
import { RouteObject } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoutes'
import { AppCheck } from './middleware/middleware'
import DashboardLayout from './layouts/dashboard.layout'
import Reporters from './pages/dashboard/reporters'
import { ERoleType } from './types/selector.types'
import UserManagement from './pages/dashboard/userManagement'

const generateRoutes = (): RouteObject[] => {
    const allowedRoles = {
        home: [ERoleType.ADMIN],
        reporters: [ERoleType.ADMIN],
        users: [ERoleType.ADMIN]
    }
    return [
        {
            path: '/app',
            element: (
                <AppCheck>
                    <DashboardLayout />
                </AppCheck>
            ),
            children: [
                {
                    path: 'home',
                    element: (
                        <ProtectedRoute allowedRoles={allowedRoles.home}>
                            <Home />
                        </ProtectedRoute>
                    )
                },
                {
                    path: 'reporters',
                    element: (
                        <ProtectedRoute allowedRoles={allowedRoles.reporters}>
                            <Reporters />
                        </ProtectedRoute>
                    )
                },
                {
                    path: 'user-management',
                    element: (
                        <ProtectedRoute allowedRoles={allowedRoles.users}>
                            <UserManagement />
                        </ProtectedRoute>
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
