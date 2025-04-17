import { useEffect, useState } from 'react'

import UserManagerTable from '../../components/antdesign/userManagerTable'
import { CreateUserDrawer } from '../../components/antdesign/drawers/CreateUserDrawer'
import { fetchUsers } from '../../redux/user/user.thunk'

const UserManagement = () => {
    const pageSize = 10

    const [isCreateUserDrawerOpen, setIsCreateUserDrawerOpen] = useState<boolean>(false)
    // local states
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [userData, setUserData] = useState([])

    console.log('userData', userData)
    const getUsers = async (signal: AbortSignal) => {
        try {
            setLoading(true)

            const data = await fetchUsers(signal, page, 10)
            if (data) {
                setUserData(data.data.adminUsers)
                setTotalPages(data.meta.page.pages)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getUsers(signal)
        return () => {
            controller.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
        <div className="space-y-4 px-8 py-4">
            <div className="flex justify-between items-center">
                <h2 className="font-inter font-semibold text-secondary text-[22px]">User Management</h2>

                <button
                    onClick={() => setIsCreateUserDrawerOpen(true)}
                    className="bg-primary rounded-[36px] font-inter border-none hover:bg-customBlue text-white text-base 2xl:text-base font-semibold lg:h-9 2xl:h-12 px-5">
                    Create User
                </button>
            </div>
            <UserManagerTable
                loading={loading}
                userData={userData}
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                totalPages={totalPages}
            />
            <CreateUserDrawer
                isCreateUserDrawerOpen={isCreateUserDrawerOpen}
                setIsCreateUserDrawerOpen={setIsCreateUserDrawerOpen}
            />
        </div>
    )
}

export default UserManagement
