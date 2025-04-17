import { Drawer, Form, message } from 'antd'
import { ChangeEvent, Dispatch, useState } from 'react'
import { DropdownSelector, PhoneNumberItem, SubmitButton, TextAreaItem, TextItem, UploadFile } from '../form.components'
import { EConfigButtonType, EReporterAccountType } from '../../../types/state.types'
import { ButtonThemeConfig } from '../configs.components'
import { EAccountType } from '../../../types/selector.types'
import { ItemType } from '../../../types/state.types'
import { createReporter } from '../../../redux/reporter/reporter.thunk'

export const CreateReportDrawer = ({
    isCreateReportDrawerOpen,
    setIsCreateReportDrawerOpen
}: {
    isCreateReportDrawerOpen: boolean
    setIsCreateReportDrawerOpen: Dispatch<boolean>
}) => {
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [form] = Form.useForm()
    const [selectedAccount, setSelectedAccount] = useState<string | undefined>()

    const phoneInputChangeHandler = (phone: string) => {
        setDataValues({ ...dataValues, phoneNumber: phone })
    }

    const roleItems: ItemType[] = Object.values(EReporterAccountType).map((role) => ({
        key: role,
        label: role,
        value: role,
        desc: role
    }))

    const [dataValues, setDataValues] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '91',
        accountType: selectedAccount as EReporterAccountType
    })

    const submitUpdates = () => {
        setDisabled(true)
        form.validateFields()
            .then(() => {
                const finalPayload = {
                    firstName: dataValues.firstName,
                    lastName: dataValues.lastName,
                    phoneNumber: dataValues.phoneNumber,
                    accountType: selectedAccount as EReporterAccountType,
                    emailAddress: dataValues.emailAddress
                }
                return createReporter(finalPayload)
            })
            .then((res) => {
                console.log('bhae', res)
                if (res?.success) {
                    form.resetFields()
                    setDataValues({
                        firstName: '',
                        lastName: '',
                        emailAddress: '',
                        phoneNumber: '91',
                        accountType: selectedAccount as EReporterAccountType
                    })
                    setSelectedAccount('')
                    setIsCreateReportDrawerOpen(false)
                }
            })
            .catch(() => {
                setDisabled(false)
            })
    }

    return (
        <Drawer
            className="rounded-tl-3xl rounded-bl-3xl"
            open={isCreateReportDrawerOpen}
            onClose={() => setIsCreateReportDrawerOpen(false)}
            footer={null}
            title="Create Reporter"
            width={564}>
            <Form
                form={form}
                onFinish={submitUpdates}>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label
                            className=" font-inter font-semibold text-font16 text-[#505050]"
                            htmlFor="">
                            First Name
                            <span className="text-red-500">*</span>
                        </label>
                        <TextItem
                            name="firstName"
                            type="text"
                            placeholder="Enter first name"
                            required={true}
                            onChange={(e) => setDataValues((prev) => ({ ...prev, firstName: e.target.value }))}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className=" font-inter font-semibold text-font16 text-[#505050]"
                            htmlFor="">
                            Last Name
                            <span className="text-red-500">*</span>
                        </label>

                        <TextItem
                            name="lastName"
                            type="text"
                            placeholder="Enter last name"
                            required={true}
                            onChange={(e) => setDataValues((prev) => ({ ...prev, lastName: e.target.value }))}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className=" font-inter font-semibold text-font16 text-[#505050]"
                            htmlFor="">
                            WhatsApp Number
                        </label>
                        <PhoneNumberItem
                            name="phoneNumber"
                            required={true}
                            contact={{ phone: dataValues.phoneNumber }}
                            onChange={phoneInputChangeHandler}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className=" font-inter font-semibold text-font16 text-[#505050]"
                            htmlFor="">
                            Email
                            <span className="text-red-500">*</span>
                        </label>
                        <TextItem
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            required={true}
                            onChange={(e) => setDataValues((prev) => ({ ...prev, emailAddress: e.target.value }))}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor=""
                            className="font-inter font-semibold text-lg text-customGray">
                            Account Type <span className="text-red-500">*</span>
                        </label>
                        <DropdownSelector
                            placeholder="Select Account Type"
                            name="account"
                            mode={undefined}
                            allowClear={false}
                            required={true}
                            items={roleItems}
                            handleChange={(value: string) => setSelectedAccount(value)}
                        />
                    </div>
                    <div className="mt-4">
                        <ButtonThemeConfig buttonType={EConfigButtonType.PRIMARY}>
                            <SubmitButton
                                text="Create User"
                                // disabled={disabled}
                                className="bg-primary rounded-md px-6 py-3 font-regular border-none hover:bg-customBlue text-white text-base font-semibold lg:h-9 2xl:h-[43px]"
                            />
                        </ButtonThemeConfig>
                    </div>
                </div>
            </Form>
        </Drawer>
    )
}
