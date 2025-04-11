import { Result } from 'antd'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link
                    className="bg-secondary px-3 py-[10px] text-sm font-normal font-inter text-white rounded-[4px] hover:text-white"
                    to={`/app/home'`}>
                    Back Home
                </Link>
            }
        />
    )
}

export default ErrorPage
