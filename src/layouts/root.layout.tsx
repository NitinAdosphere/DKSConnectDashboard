import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { RootState } from '../types/selector.types'
import { useSelector, useDispatch } from 'react-redux'
import { clearError, clearMessage } from '../redux/common/common.slice'
import { message } from 'antd'
import { ErrorBoundary } from 'react-error-boundary'
import SomethingWentWrong from '../components/custom/somethingWentWrong'

//@ts-ignore
const handleError = (error) => {
    message.error(error.message || 'An unexpected error occurred')
}

const RootLayout = () => {
    const dispatch = useDispatch()
    const { error, message } = useSelector((state: RootState) => state.Common)

    useEffect(() => {
        // for error message toast
        if (error) {
            toast(error, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: 'error'
            })
            dispatch(clearError())
        }

        // for success message toast
        if (message) {
            toast(message, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: 'success'
            })
            dispatch(clearMessage())
        }
    }, [dispatch, error, message])

    return (
        <>
            <ErrorBoundary
                fallback={<SomethingWentWrong />}
                onError={handleError}>
                <Outlet />
            </ErrorBoundary>
        </>
    )
}

export default RootLayout
