import ErrorPage from './pages/404Page.tsx'
import AuthPages from './pages/auth/index.ts'
import generateRoutes from './GenerateRoutes.tsx'
import RootLayout from './layouts/root.layout.tsx'
import AuthLayout from './layouts/auth.layout.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { AuthCheck } from './middleware/middleware.tsx'

const { Login } = AuthPages

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: (
                    // <AuthCheck>
                    <AuthLayout />
                    // </AuthCheck>
                ),
                children: [
                    {
                        path: '',
                        element: <Login />
                    }
                ]
            },

            ...generateRoutes()
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])
