import { Drawer, Form } from 'antd'
import { ChangeEvent, Dispatch, useState } from 'react'
import { DropdownSelector, SubmitButton, TextAreaItem, TextItem, UploadFile } from '../form.components'
import { EConfigButtonType } from '../../../types/state.types'
import { ButtonThemeConfig } from '../configs.components'

export const CreateUpdateDrawer = ({
    isCreateUpdateDrawerOpen,
    setIsCreateUpdateDrawerOpen,
    content
}: {
    isCreateUpdateDrawerOpen: boolean
    setIsCreateUpdateDrawerOpen: Dispatch<boolean>
    content: string
}) => {
    const [form] = Form.useForm()
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const [updateBrief, setUpdateBrief] = useState<string | null>('')

    const update = [
        { key: '1', label: 'Kpcc President Update', value: 'kpcc-president', desc: 'Update from KPCC President' },
        { key: '2', label: 'Government Update', value: 'government', desc: 'Update from the Government' },
        { key: '3', label: 'Local Update', value: 'local', desc: 'Update from Local Authorities' }
    ]
    const submitUpdates = () => {
        console.log('Form submitted:', form.getFieldsValue())
        setIsCreateUpdateDrawerOpen(false)
    }
    const handleUpdatesChange = (value: string) => {
        console.log(value)
    }
    const inputUpdateBriefHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setUpdateBrief(e.target.value)
    }
    const handleFileUpload = (file: File): boolean => {
        setLoading(true)
        console.log(file)
        // Simulate file upload success
        setLoading(false)
        return true
    }
    return (
        <Drawer
            className="rounded-tl-3xl rounded-bl-3xl"
            open={isCreateUpdateDrawerOpen}
            onClose={() => setIsCreateUpdateDrawerOpen(false)}
            footer={null}
            title="Create New Update"
            width={564}>
            <Form
                form={form}
                className="flex flex-col w-full gap-2 xl:gap-4"
                onFinish={submitUpdates}
                fields={[
                    {
                        name: 'title',
                        value: title
                    }
                ]}>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="font-inter font-semibold text-lg text-customGray">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <TextItem
                        name="title"
                        type="text"
                        placeholder="Enter Update Title"
                        required={true}
                        onChange={(e) => setTitle(e.target.value)}
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
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor=""
                        className="font-inter font-semibold text-lg text-customGray">
                        Upload Media <span className="text-red-500">*</span>
                    </label>
                    <UploadFile
                        accept=".png,.jpg,.jpeg,.pdf"
                        isUploading={loading}
                        handleFileUpload={handleFileUpload}
                    />
                </div>
                <div className="pt-4">
                    <ButtonThemeConfig buttonType={EConfigButtonType.PRIMARY}>
                        <SubmitButton
                            text="Publish Update"
                            // disabled={isDisabled}
                            className="bg-primary rounded-md px-6 py-3 font-regular border-none hover:bg-customBlue text-white text-base font-semibold lg:h-9 2xl:h-[43px]"
                        />
                    </ButtonThemeConfig>
                </div>
            </Form>
        </Drawer>
    )
}
