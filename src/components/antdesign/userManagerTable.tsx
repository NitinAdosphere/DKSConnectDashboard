import { Table, TableProps } from 'antd'

import { TableConfig } from './configs.components'

import { formatPhoneNumber } from '../../quicker/quicker'

interface IUser {
    _id: string
    firstName: string
    lastName: string
    whatsappInfo: {
        number: string
    }
    emailAddress: string
}

const UserManagerTable = ({
    userData,
    totalPages,
    loading,
    setPage,
    page,
    pageSize
}: {
    userData: any
    totalPages: number
    loading: boolean
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
    pageSize: number
}) => {
    console.log('DFDF', userData)

    const columns: TableProps<IUser>['columns'] = [
        {
            title: <span className="font-medium 2xl:text-base md:text-sm">Sr. No.</span>,
            dataIndex: 'srNo',
            width: 55,
            align: 'center',
            key: 'srNo',
            render: (_, _record, index) => <span className="text-customGray 2xl:text-base md:text-sm">{(page - 1) * pageSize + index + 1}</span>
        },
        {
            title: <span className="font-medium 2xl:text-base md:text-sm">First Name</span>,
            dataIndex: 'firstName',
            width: 150,
            key: 'firstName',
            render: (_, record) => <span className="text-secondary capitalize 2xl:text-base md:text-sm">{record?.firstName} </span>
        },
        {
            title: <span className="font-medium 2xl:text-base md:text-sm">Last Name</span>,
            dataIndex: 'lastName',
            width: 150,
            key: 'lastName',
            render: (_, record) => <span className="text-secondary capitalize 2xl:text-base md:text-sm">{record?.lastName}</span>
        },
        {
            title: <span className="font-medium 2xl:text-base md:text-sm">WhatsApp Number</span>,
            dataIndex: 'phoneNumber',
            width: 150,
            key: 'phoneNumber',
            render: (_, record) => (
                <span className="text-customGray 2xl:text-base md:text-sm">{formatPhoneNumber(record?.whatsappInfo.number ?? '')}</span>
            )
        },
        {
            title: <span className="font-medium 2xl:text-base md:text-sm">Email</span>,
            dataIndex: 'email',
            width: 250,
            key: 'email',
            render: (_, record) => <span className="text-customGray 2xl:text-base md:text-sm">{record?.emailAddress}</span>
        },

        {
            title: <span className="font-medium 2xl:text-base md:text-sm">Actions</span>,
            key: 'action',
            width: 180,

            render: (_, _record) => (
                <>
                    <div className="flex 2xl:gap-3 md:gap-2">
                        <div>
                            <button
                                className="flex items-center justify-center 2xl:h-10 md:h-8 text-white bg-primary border-primary rounded-[4px] 2xl:px-4 md:px-3 2xl:py-1 md:py-0 2xl:text-base md:text-sm font-dmSans opacity-35 cursor-not-allowed"
                                onClick={() => {
                                    // dispatch(setCurrentSelectedUser(record))
                                }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </>
            )
        }
    ]

    return (
        <div>
            <TableConfig
                paddingBlock={16}
                borderColor="white">
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={userData}
                    rowKey={(record) => record._id as string}
                    scroll={{ x: '1200px' }}
                    sticky={true}
                    className="2xl:text-base md:text-sm font-normal influencer font-dmSans"
                    pagination={{
                        current: page,
                        pageSize: pageSize,
                        showSizeChanger: false,
                        total: totalPages * pageSize,
                        onChange: (page: number) => {
                            setPage(page)
                        }
                    }}
                />
            </TableConfig>
        </div>
    )
}

export default UserManagerTable
