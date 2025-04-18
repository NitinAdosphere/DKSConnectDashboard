// import moment from 'moment'
import { useState } from 'react'
import { INews, IUpdates } from '../../types/state.types'
import { TableConfig } from './configs.components'
import { Table, TableProps } from 'antd'
import ViewIcon from '../../assets/eye-view.svg'
import DeleteIcon from '../../assets/delete-icon.svg'
import { ViewUpdateDrawer } from './drawers/ViewUpdateDrawer'
import { DeleteUpdate } from './modals/updatesModal'
// import Web from '../../assets/web.svg'
// import WhatsApp from '../../assets/whatsapp.svg'

const UpdateTable = ({
    updates,
    totalPages,
    loading,
    setPage,
    page,
    pageSize
}: {
    updates: INews[]
    totalPages: number
    loading: boolean
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
    pageSize: number
}) => {
    const [isViewUpdateDrawerOpen, setIsViewUpdateDrawerOpen] = useState<boolean>(false)
    const [isDeleteUpdateModalOpen, setIsDeleteUpdateModalOpen] = useState<boolean>(false)

    const columns: TableProps<INews>['columns'] = [
        {
            title: 'Sr No.',
            dataIndex: 'srNo',
            width: 140,
            key: 'srNo',
            render: (_, _record, index) => <span>{(page - 1) * pageSize + index + 1}</span>
        },
        {
            title: 'Update Title',
            dataIndex: 'newsTitle',
            key: 'newsTitle',
            width: 400,
            render: (_, record) => <span>{record.newsTitle}</span>
        },
        {
            title: 'Total Participations',
            dataIndex: 'submittedUpdate',
            key: 'submittedUpdate',
            width: 200,
            render: (_, record) => <span>{record.submittedUpdate}</span>
        },
        {
            title: 'Total Views',
            dataIndex: 'views',
            key: 'views',
            width: 200,
            render: (_, record) => <span>{record.views}</span>
        },
        {
            title: 'Total Interactions',
            dataIndex: 'interactions',
            key: 'interactions',
            width: 200,
            render: (_, record) => <span>{record.interactions}</span>
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            width: 300,
            render: (_, record) => (
                <div className="flex gap-3">
                    <button
                        className="font-inter font-medium text-sm px-4 py-[6px] bg-primary hover:bg-customBlue flex justify-center items-center gap-1 text-white rounded"
                        onClick={() => setIsViewUpdateDrawerOpen(true)}>
                        <span>
                            <img
                                src={ViewIcon}
                                alt="icon"
                            />
                        </span>
                        View
                    </button>
                    <button
                        className="font-inter font-medium text-sm px-4 py-[6px] bg-[#F90E0E] flex justify-center items-center gap-1 text-white rounded"
                        onClick={() => setIsDeleteUpdateModalOpen(true)}>
                        <span>
                            <img
                                src={DeleteIcon}
                                alt="icon"
                            />
                        </span>
                        Delete
                    </button>
                </div>
            )
        }
    ]

    return (
        <>
            <TableConfig
                paddingBlock={16}
                borderColor="#EFF6FA">
                <Table
                    scroll={{ x: '1248px' }}
                    columns={columns}
                    loading={loading}
                    rowKey={(record) => record._id as string}
                    dataSource={updates}
                    pagination={{
                        current: page,
                        pageSize: pageSize,
                        showSizeChanger: false,
                        total: totalPages * pageSize,
                        onChange: (page: number) => {
                            setPage(page)
                        }
                    }}
                    className="text-base font-inter font-medium text-customGray rounded-[10px]"
                />
            </TableConfig>
            {isViewUpdateDrawerOpen && (
                <ViewUpdateDrawer
                    content="view"
                    isViewUpdateDrawerOpen={isViewUpdateDrawerOpen}
                    setIsViewUpdateDrawerOpen={setIsViewUpdateDrawerOpen}
                />
            )}
            {isDeleteUpdateModalOpen && (
                <DeleteUpdate
                    isDeleteUpdateModalOpen={isDeleteUpdateModalOpen}
                    setIsDeleteUpdateModalOpen={setIsDeleteUpdateModalOpen}
                    update="update"
                />
            )}
        </>
    )
}

export default UpdateTable
