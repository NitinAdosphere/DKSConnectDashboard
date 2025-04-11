import { useEffect, useState } from 'react'
import ReporterTable from '../../components/antdesign/reporterTable'
import { IReporters } from '../../types/state.types'
// import { fetchPledge } from '../../redux/pledge/pledge.thunk'
import { useSelector } from 'react-redux'
import { ERoleType, RootState } from '../../types/selector.types'

const Reporters = () => {
    const { user } = useSelector((state: RootState) => state.User) // Assuming user data is stored in Redux

    const pageSize = 25
    const [page, setPage] = useState(1)
    // const [reporters, setReporters] = useState<IReporters[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(false)

    const reporters = [
        {
            _id: '01',
            mediaName: 'Bellary Belagayithu',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        },
        {
            _id: '01',
            mediaName: 'Bellary Belagayithu',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        },
        {
            _id: '01',
            mediaName: 'Bellary Belagayithu',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        },
        {
            _id: '01',
            mediaName: 'Bellary Belagayithu',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        }
    ]
    // const getReporters = async (signal: AbortSignal) => {
    //     try {
    //         setLoading(true)
    //         const response = await fetchReporters(signal, page, pageSize)
    //         if (response) {
    //             setReporters(response.data)
    //             setPage(response.meta.page.current)
    //             setTotalPages(response.meta.page.pages)
    //         }
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        // getReporters(signal)
        return () => {
            controller.abort()
        }
    }, [page])

    return (
        <div className="py-4 px-8">
            <ReporterTable
                loading={loading}
                page={page}
                reporters={reporters}
                pageSize={pageSize}
                setPage={setPage}
                totalPages={totalPages}
                key={'reporter-table'}
            />
        </div>
    )
}
export default Reporters
