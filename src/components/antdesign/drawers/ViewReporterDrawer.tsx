import { Drawer } from 'antd'
import { Dispatch, useRef } from 'react'
import Calender from '../../../assets/calendar.svg'
import sample1 from '../../../assets/sample1.png'
type MediaItem = {
    type: 'image' | 'video'
    src: string
}
export const ViewReporterDrawer = ({
    isViewUpdateDrawerOpen,
    setIsViewReporterDrawerOpen,
    content
}: {
    isViewUpdateDrawerOpen: boolean
    setIsViewReporterDrawerOpen: Dispatch<boolean>
    content: string
}) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: React.MouseEvent) => {
        isDown = true
        scrollRef.current?.classList.add('cursor-grabbing')
        startX = e.pageX - (scrollRef.current?.offsetLeft || 0)
        scrollLeft = scrollRef.current?.scrollLeft || 0
    }

    const onMouseLeave = () => {
        isDown = false
        scrollRef.current?.classList.remove('cursor-grabbing')
    }

    const onMouseUp = () => {
        isDown = false
        scrollRef.current?.classList.remove('cursor-grabbing')
    }

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 1.5 // scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk
    }
    const mediaData = [
        { srNo: '01', name: 'Run tv', link: '#', views: '25K' },
        { srNo: '02', name: 'Bellary Belagayithu', link: '#', views: '25K' },
        { srNo: '03', name: 'InNews', link: '#', views: '25K' },
        { srNo: '04', name: 'BVNEWS5', link: '#', views: '25K' },
        { srNo: '05', name: 'Ejagatthu', link: '#', views: '25K' },
        { srNo: '06', name: 'News81', link: '#', views: '25K' }
    ]

    const mediaList: MediaItem[] = [
        { type: 'image', src: sample1 },
        { type: 'image', src: sample1 },
        { type: 'image', src: sample1 },
        { type: 'image', src: sample1 }
    ]
    return (
        <Drawer
            className="rounded-tl-3xl rounded-bl-3xl"
            open={isViewUpdateDrawerOpen}
            onClose={() => setIsViewReporterDrawerOpen(false)}
            footer={null}
            title="View Reporter"
            width={564}>
            <div className="font-inter bg-[#EFF6FA] py-4 px-6 rounded-lg flex justify-between items-center">
                <div>
                    <h4 className="font-inter font-medium text-base text-customGray">Total Participations</h4>
                    <h2 className="font-inter font-bold text-font32 text-secondary">100</h2>
                </div>
                <div>
                    <h4 className="font-inter font-medium text-base text-customGray">Total Views</h4>
                    <h2 className="font-inter font-bold text-font32 text-secondary">25K</h2>
                </div>
                <div>
                    <h4 className="font-inter font-medium text-base text-customGray">Total Interactions</h4>
                    <h2 className="font-inter font-bold text-font32 text-secondary">120K</h2>
                </div>
            </div>
            {/* <div className="py-4">
                <div className="flex gap-1 pb-2">
                    <img
                        src={Calender}
                        alt="Calender-icon"
                    />
                    <span className="font-inter text-xs text-customGray">25-03-2025</span>
                </div>
                <h4 className="font-inter font-semibold text-xl text-[#0D161D] leading-[26px] space-y-2">
                    ದಾಸದರಹಳ್ಳಿ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರದ ಮಾಜಿ ಶಾಸಕ ಆರ್.ಮಂಜುನಾಥ್ ಇಂದು ಉಪಮುಖ್ಯಮಂತ್ರಿ ಡಿಕೆ ಶಿವಕುಮಾರ್ ಅವರನ್ನು ಭೇಟಿಯಾದರು s
                </h4>
                <p className="font-inter font-semibold text-sm text-[#0D161D] leading-[20px] space-y-2 py-4">
                    ಬೆಂಗಳೂರಿನ ಕುಮಾರಪಾರ್ಕ್ ನಲ್ಲಿರುವ ಸರಕಾರಿ ಕಚೇರಿಯ ಆವರಣದಲ್ಲಿ ಮಂಗಳವಾರ ತಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿದ ದಾಸರಹಳ್ಳಿ ವಿಧಾನಸಭೆ ಕ್ಷೇತ್ರದ ಮಾಜಿ ಶಾಸಕ ಆರ್
                    ಮಂಜುನಾಥ್ ನೇತೃತ್ವದ ಕಾಂಗ್ರೆಸ್ ಮುಖಂಡರು ಹಾಗೂ ಕಾರ್ಯಕರ್ತರ ತಂಡವನ್ನು ಉದ್ದೇಶಿಸಿ ಡಿಸಿಎಂ ಡಿ ಕೆ ಶಿವಕುಮಾರ್ ಅವರು ಮಾತನಾಡಿದರು. ಗ್ಯಾರಂಟಿ ಯೋಜನೆಗಳ
                    ಅನುಷ್ಠಾನ ಸಮಿತಿ ರಾಜ್ಯಾಧ್ಯಕ್ಷ, ಮಾಜಿ ಸಚಿವ ಎಚ್ ಎಂ ರೇವಣ್ಣ, ಮಾಜಿ ಸಂಸದ, ಹಿರಿಯ ಮುಖಂಡ ಬಿ ಎಲ್ ಶಂಕರ್, ಬೆಂಗಳೂರು ಉತ್ತರ ಜಿಲ್ಲಾ ಕಾಂಗ್ರೆಸ್ ಅಧ್ಯಕ್ಷ
                    ಅಬ್ದುಲ್ ವಾಜೀದ್, ನಗರಸಭೆ ಮಾಜಿ ಅಧ್ಯಕ್ಷ ಕೆ ಸಿ ಅಶೋಕ್, ಧನಲಕ್ಷಿ, ನಾಗಭೂಷಣ್ ಮತ್ತಿತರರು ಉಪಸ್ಥಿತರಿದ್ದರು. ಇದಕ್ಕೆ ಮೊದಲು ಕ್ಷೇತ್ರದ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ
                    ಸ್ಥಳೀಯ ಮುಖಂಡರ ಅಹವಾಲನ್ನು ಡಿಸಿಎಂ ಆಲಿಸಿದರು.
                </p>
            </div> */}

            {/* Media List */}
            <div className="mx-auto mt-4 rounded-tl-md rounded-tr-md overflow-hidden">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-primary text-white text-left font-inter font-semibold text-sm">
                            <th className="py-3 px-4">Sr No.</th>
                            <th className="py-3 px-4">Media Name</th>
                            <th className="py-3 px-4">Link</th>
                            <th className="py-3 px-4">Views</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#EFF6FA] text-sm">
                        {mediaData.map((media, index) => (
                            <tr
                                key={index}
                                className="hover:bg-slate-200">
                                <td className="py-3 px-4 text-[#515151] text-[15px] font-medium">{media.srNo}</td>
                                <td className="py-3 px-4 text-[#1C1C1C] text-[15px] font-semibold">{media.name}</td>
                                <td className="py-3 px-4 text-primary text-[15px] underline cursor-pointer">
                                    <a
                                        href={'#'}
                                        target=""
                                        rel="noopener noreferrer">
                                        View Link
                                    </a>
                                </td>
                                <td className="py-3 px-4 text-[#515151] text-[15px] font-medium">{media.views}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Drawer>
    )
}
