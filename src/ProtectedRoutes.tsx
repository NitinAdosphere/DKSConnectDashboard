import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './types/selector.types'
import ErrorPage from './pages/404Page'

interface ProtectedRouteProps {
    children: React.ReactNode
    allowedRoles: string[]
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const { user } = useSelector((state: RootState) => state.User) // Assuming user data is stored in Redux
    const location = useLocation()
    if (!user) {
        return (
            <Navigate
                to="/"
                state={{ from: location }}
                replace
            />
        )
    }
    if (!allowedRoles.includes(user.department)) {
        return <ErrorPage /> // Redirect to a default page if not authorized
    }

    return <>{children}</>
}

export default ProtectedRoute
