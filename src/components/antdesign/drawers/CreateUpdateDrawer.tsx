import { Drawer, Form } from 'antd'
import { Dispatch, useState } from 'react'
import { DropdownSelector, TextItem } from '../form.components'

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

    const update = [
        { label: 'Kpcc President Update', value: 'kpcc-president' },
        { label: 'Government Update', value: 'government' },
        { label: 'Local Update', value: 'local' }
    ]
    const submitUpdates = () => {
        console.log('Form submitted:', form.getFieldsValue())
        setIsCreateUpdateDrawerOpen(false)
    }
    const handleUpdatesChange = (value: string) => {
        console.log(value)
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
                        // onChange={setTitle('title')}
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
            </Form>
        </Drawer>
    )
}
