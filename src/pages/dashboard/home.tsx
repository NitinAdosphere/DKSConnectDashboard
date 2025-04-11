import YoutubeIcon from '../../assets/youtube-icon.svg'
import InstaIcon from '../../assets/instagram-icon.svg'
import UpdateIcon from '../../assets/total-update-icon.svg'
import ReporterIcon from '../../assets/total-reporter-icon.svg'
import UpdateTable from '../../components/antdesign/updateTable'
import { useState } from 'react'
import { ButtonThemeConfig } from '../../components/antdesign/configs.components'
import { SubmitButton } from '../../components/antdesign/form.components'
import { EConfigButtonType } from '../../types/state.types'
import { CreateUpdateDrawer } from '../../components/antdesign/drawers/CreateUpdateDrawer'
import { ViewUpdateDrawer } from '../../components/antdesign/drawers/ViewUpdateDrawer'
const Home = () => {
    const pageSize = 25
    const [page, setPage] = useState(1)
    const [isDisabled, setIsDisabled] = useState(false)
    // const [updates, setUpdates] = useState<IUpdates[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(false)
    const [isCreateUpdateDrawerOpen, setIsCreateUpdateDrawerOpen] = useState(false)
    const updates = [
        {
            _id: '01',
            mediaName: 'ದಾಸದರಹಳ್ಳಿ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರದ ಮಾಜಿ ಶಾಸಕ ಆರ್.ಮಂಜುನಾಥ್ ಇಂದು ಉಪಮುಖ್ಯಮಂತ್ರಿ ಡಿಕೆ ಶಿವಕುಮಾರ್ ಅವರನ್ನು ಭೇಟಿಯಾದರು ',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        },
        {
            _id: '01',
            mediaName: 'ವಿಟಿಯು ಯುವಜನೋತ್ಸವ ಉದ್ಘಾಟಿಸಿದ ಉಪ ಮುಖ್ಯಮಂತ್ರಿಗಳು ',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        },
        {
            _id: '01',
            mediaName: 'Redistribution of Lok Sabha seats; Political oppression by BJP: DCM D.K. Shivakumar',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        },
        {
            _id: '01',
            mediaName: ' ‘Changing Constitution’ statement lands Karnataka Deputy CM D.K. Shivakumar in the eye of a storm',
            submittedUpdate: '10',
            views: '25K',
            interactions: '125K'
        }
    ]
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mx-8 mt-4">
                {/* Card 1: Total Submissions */}
                <div className="bg-white shadow-customBox rounded-xl px-6 pt-6 pb-8 font-inter">
                    <h4 className="text-xl font-semibold text-secondary pb-3 border-b border-[#DDDDDD]">Total Submissions</h4>
                    <div className="grid grid-cols-3 items-center gap-4 pt-6">
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={YoutubeIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Youtube</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">2,565</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 px-4 justify-center border-x border-[#DDDDDD]">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={InstaIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Instagram</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">5,654</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className="text-center">
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Total</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">8,219</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Total Views */}
                <div className="bg-white shadow-customBox rounded-xl px-6 pt-6 pb-8 font-inter">
                    <h4 className="text-xl font-semibold text-secondary pb-3 border-b border-[#DDDDDD]">Total Views</h4>
                    <div className="grid grid-cols-3 items-center gap-4 pt-6">
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={YoutubeIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Youtube</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">10.3M</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 px-4 justify-center border-x border-[#DDDDDD]">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={InstaIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Instagram</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">12.5M</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className="text-center">
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Total</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">22.8M</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Total Interactions */}
                <div className="bg-white shadow-customBox rounded-xl px-6 pt-6 pb-8 font-inter">
                    <h4 className="text-xl font-semibold text-secondary pb-3 border-b border-[#DDDDDD]">Total Interactions</h4>
                    <div className="grid grid-cols-3 items-center gap-4 pt-6">
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={YoutubeIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Youtube</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">1.2M</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 px-4 justify-center border-x border-[#DDDDDD]">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={InstaIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Instagram</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">2.6M</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className="text-center">
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Total</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">3.8M</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4: Total Update and Reporters */}
                <div className="grid bg-white shadow-customBox rounded-xl px-6 pt-6 pb-8 font-inter">
                    <div className="grid grid-cols-2 items-center gap-4 align-middle">
                        <div className="flex items-center justify-center gap-4 px-4">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={UpdateIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Total Update</p>
                                <p className="font-inter font-bold text-secondary text-[32px]">1,466</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 px-4 justify-center border-l border-[#DDDDDD]">
                            <div className=" w-12 h-12 flex items-center justify-center">
                                <img
                                    src={ReporterIcon}
                                    alt="Youtube Icon"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <p className="font-inter font-medium text-customGray text-xl leading-[30px]">Total Reporters </p>
                                <p className="font-inter font-bold text-secondary text-[32px]">546</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-8">
                <div className="flex justify-between items-center">
                    <h2 className="font-inter font-semibold text-secondary text-[22px] py-5">All Update</h2>

                    <button
                        onClick={() => setIsCreateUpdateDrawerOpen(true)}
                        disabled={isDisabled}
                        className="bg-primary rounded-[36px] font-inter border-none hover:bg-customBlue text-white text-base 2xl:text-base font-semibold lg:h-9 2xl:h-12 px-5">
                        Create New Update
                    </button>
                </div>
                <UpdateTable
                    loading={loading}
                    page={page}
                    updates={updates}
                    pageSize={pageSize}
                    setPage={setPage}
                    totalPages={totalPages}
                    key={'update-table'}
                />
                <CreateUpdateDrawer
                    content="content"
                    isCreateUpdateDrawerOpen={isCreateUpdateDrawerOpen}
                    setIsCreateUpdateDrawerOpen={setIsCreateUpdateDrawerOpen}
                />
            </div>
        </>
    )
}

export default Home
