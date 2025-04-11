import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className="font-regular overflow-hidden h-screen w-screen bg-[url('/bg-login.png')] bg-no-repeat bg-center bg-cover flex justify-center items-center font-inter">
            <Outlet />
        </div>
    )
}

export default AuthLayout
