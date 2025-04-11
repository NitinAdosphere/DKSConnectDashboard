// import moment from 'moment'
import { IReporters } from '../../types/state.types'
import { TableConfig } from './configs.components'
import { Table, TableProps } from 'antd'
import ViewIcon from '../../assets/eye-view.svg'
// import Web from '../../assets/web.svg'
// import WhatsApp from '../../assets/whatsapp.svg'

const ReporterTable = ({
    reporters,
    totalPages,
    loading,
    setPage,
    page,
    pageSize
}: {
    reporters: IReporters[]
    totalPages: number
    loading: boolean
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
    pageSize: number
}) => {
    const columns: TableProps<IReporters>['columns'] = [
        {
            title: 'Sr No.',
            dataIndex: 'srNo',
            width: 140,
            key: 'srNo',
            render: (_, _record, index) => <span>{(page - 1) * pageSize + index + 1}</span>
        },
        {
            title: 'Media Name',
            dataIndex: 'mediaName',
            key: 'mediaName',
            width: 400,
            render: (_, record) => <span>{record.mediaName}</span>
        },
        {
            title: 'Submitted Update',
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
                <button className="font-inter font-medium text-sm px-4 py-[6px] bg-primary flex justify-center items-center gap-1 text-white rounded">
                    <span>
                        <img
                            src={ViewIcon}
                            alt="icon"
                        />
                    </span>
                    View
                </button>
            )
        }
    ]

    return (
        <TableConfig
            paddingBlock={16}
            borderColor="#EFF6FA">
            <Table
                scroll={{ x: '1248px' }}
                columns={columns}
                loading={loading}
                rowKey={(record) => record._id as string}
                dataSource={reporters}
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
    )
}

export default ReporterTable
