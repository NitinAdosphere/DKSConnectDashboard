import { Button, Drawer, Form } from 'antd'
import { ChangeEvent, Dispatch, useState } from 'react'
import { DropdownSelector, SubmitButton, TextAreaItem, TextItem } from '../form.components'
import { EConfigButtonType, ENewsUpdateTypes } from '../../../types/state.types'
import { ButtonThemeConfig } from '../configs.components'
import { createUpdate } from '../../../redux/allUpdate/update.thunk'
import FileDropzone from '../../custom/filedropzone'
import loadingSvg from '../../../assets/loading.svg'

export const CreateUpdateDrawer = ({
    isCreateUpdateDrawerOpen,
    setIsCreateUpdateDrawerOpen
}: {
    isCreateUpdateDrawerOpen: boolean
    setIsCreateUpdateDrawerOpen: Dispatch<boolean>
}) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [newsTitle, setNewsTitle] = useState('')
    const [selectedUpdateType, setSelectedUpdateType] = useState<string | null>(null)
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [updateBrief, setUpdateBrief] = useState<string | null>('')
    const [fileErrors, setFileErrors] = useState<string[]>([])

    const update = [
        { key: '1', label: 'KPCC President', value: ENewsUpdateTypes.KPCC_PRESIDENT, desc: 'Update from KPCC President' },
        { key: '2', label: 'Government', value: ENewsUpdateTypes.GOVERNMENT, desc: 'Update from the Government' },
        { key: '3', label: 'Local', value: ENewsUpdateTypes.LOCAL, desc: 'Update from Local Authorities' }
    ]

    const handleUpdatesChange = (value: string) => {
        setSelectedUpdateType(value)
    }
    const inputUpdateBriefHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setUpdateBrief(e.target.value)
    }

    const submitUpdates = async () => {
        try {
            form.validateFields()
            if (!newsTitle || !selectedUpdateType || !updateBrief || uploadedFiles.length === 0) {
                setFileErrors(['At least one file is required.'])
                return
            }

            setLoading(true)

            const formData = new FormData()
            formData.append('newsTitle', newsTitle)
            formData.append('newsType', selectedUpdateType)
            formData.append('brief', updateBrief)

            uploadedFiles.forEach((file) => {
                if (file) {
                    formData.append('files', file)
                }
            })

            const res = await createUpdate(formData)
            if (res.success) {
                form.resetFields()
                setNewsTitle('')
                setSelectedUpdateType(null)
                setIsCreateUpdateDrawerOpen(false)
            }
            console.log('res', res.success)
        } catch (error) {
            console.error(error)
            setLoading(false)
            // message.error('An error occurred while submitting.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Drawer
            className="rounded-tl-3xl rounded-bl-3xl"
            open={isCreateUpdateDrawerOpen}
            onClose={() => {
                setIsCreateUpdateDrawerOpen(false)
                setUploadedFiles([]) // Clear uploaded files
            }}
            footer={null}
            title="Create New Update"
            width={564}>
            <Form
                form={form}
                className="flex flex-col w-full gap-2 xl:gap-4"
                // onFinish={submitUpdates}
                fields={[
                    {
                        name: 'newsTitle',
                        value: newsTitle
                    }
                ]}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="font-inter font-semibold text-lg text-customGray">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <TextItem
                        name="newsTitle"
                        type="text"
                        placeholder="Enter Update Title"
                        required={true}
                        onChange={(e) => setNewsTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="font-inter font-semibold text-lg text-customGray">
                        Update Type <span className="text-red-500">*</span>
                    </label>
                    <DropdownSelector
                        placeholder="Select Update Type"
                        name="update"
                        mode={undefined}
                        allowClear={false}
                        required={true}
                        items={update}
                        handleChange={handleUpdatesChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="font-inter font-semibold text-lg text-customGray">
                        Brief <span className="text-red-500">*</span>
                    </label>
                    <TextAreaItem
                        name="brief"
                        required={true}
                        min={20}
                        max={200}
                        className="resize-none w-full h-10 me-2 border border-[#D9D9D9] font-dmSans font-normal text-base text-customGray rounded"
                        row={4}
                        onChange={inputUpdateBriefHandler}
                        placeholder="Enter Brief"
                        // className="bg-[#F5F5F5]"
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label
                        htmlFor=""
                        className="font-inter font-semibold text-lg text-customGray">
                        Upload Media <span className="text-red-500">*</span>
                    </label>
                    <FileDropzone
                        onFilesAdded={(files) => setUploadedFiles((prevFiles) => [...prevFiles, ...files])}
                        loading={loading}
                        setFileErrors={setFileErrors}
                    />
                    {fileErrors.length > 0 && (
                        <div className="text-red-500 text-sm">
                            {fileErrors.map((error, index) => (
                                <p
                                    key={index}
                                    className="flex items-center gap-2">
                                    <span>{error}</span>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div className="pt-4">
                    <ButtonThemeConfig buttonType={EConfigButtonType.PRIMARY}>
                        <Button
                            disabled={loading}
                            className="bg-primary rounded-md px-6 py-3 font-regular border-none hover:bg-customBlue text-white text-base font-semibold lg:h-9 2xl:h-[43px]"
                            onClick={() => {
                                submitUpdates()
                            }}>
                            Publish Update
                            {loading && (
                                <img
                                    src={loadingSvg}
                                    className="h-6 w-auto animate-spin"
                                    alt=""
                                />
                            )}
                        </Button>
                    </ButtonThemeConfig>
                </div>
            </Form>
        </Drawer>
    )
}
