import { Button, Drawer, Form } from 'antd'
import { Dispatch, useState } from 'react'
import { DropdownSelector, PhoneNumberItem, TextItem } from '../form.components'
import { EConfigButtonType } from '../../../types/state.types'
import { ButtonThemeConfig } from '../configs.components'
import { ERoleType } from '../../../types/selector.types'
import { createUser } from '../../../redux/user/user.thunk'
import loadingSvg from '../../../assets/loading.svg'

export const CreateUserDrawer = ({
    isCreateUserDrawerOpen,
    setIsCreateUserDrawerOpen
}: {
    isCreateUserDrawerOpen: boolean
    setIsCreateUserDrawerOpen: Dispatch<boolean>
}) => {
    const [form] = Form.useForm()

    const [selectedRole, setSelectedRole] = useState<string | undefined>()
    const [isDisabled, setIsDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [dataValues, setDataValues] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '91',
        role: ERoleType
    })
    const { firstName, lastName, emailAddress, phoneNumber } = dataValues
    const inputChangeHandler = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value
        if (name === 'firstName' || name === 'lastName') {
            value = value.trim()
        }

        setDataValues({ ...dataValues, [name]: value })
    }
    const phoneInputChangeHandler = (phone: string) => {
        setDataValues({ ...dataValues, phoneNumber: phone })
    }
    type ItemType = { key: string; value: string; label: string; desc: string }
    const roleItems: ItemType[] = Object.values(ERoleType).map((role) => ({
        key: role,
        value: role,
        label: role,
        desc: role
    }))

    const submitBtnHandler = () => {
        setIsDisabled(true)
        setLoading(true)
        form.validateFields()
            .then(() => {
                const finalPayload = {
                    firstName,
                    lastName,
                    phoneNumber,
                    role: selectedRole as ERoleType,
                    emailAddress
                }

                return createUser(finalPayload)
            })
            .then((res) => {
                if (res.success) {
                    setIsDisabled(false)
                    setDataValues({
                        firstName: '',
                        lastName: '',
                        emailAddress: '',
                        phoneNumber: '91',
                        role: ERoleType
                    })
                    setSelectedRole(undefined)
                    setIsCreateUserDrawerOpen(false)
                }
            })
            .catch(() => {
                setLoading(false)
                setIsDisabled(false)
            })
    }

    return (
        <Drawer
            className="rounded-tl-3xl rounded-bl-3xl"
            open={isCreateUserDrawerOpen}
            onClose={() => setIsCreateUserDrawerOpen(false)}
            footer={null}
            title="Create New User"
            width={564}>
            <Form
                form={form}
                className="flex flex-col w-full gap-2 xl:gap-4"
                onFinish={submitBtnHandler}
                fields={[
                    {
                        name: 'firstName',
                        value: firstName
                    },
                    {
                        name: 'lastName',
                        value: lastName
                    },
                    {
                        name: 'emailAddress',
                        value: emailAddress
                    },
                    {
                        name: 'role',
                        value: selectedRole
                    },
                    {
                        name: 'phoneNumber',
                        value: phoneNumber
                    }
                ]}>
                <div className="space-y-2">
                    <h6 className="font-inter text-base text-customGray text-font16 font-semibold">
                        First Name <span className="text-red-500">*</span>
                    </h6>
                    <TextItem
                        name="firstName"
                        type="text"
                        required={true}
                        min={2}
                        placeholder="Enter first name"
                        max={128}
                        onChange={inputChangeHandler('firstName')}
                    />
                </div>
                <div className="space-y-2">
                    <h6 className="font-inter text-base text-customGray text-font16 font-semibold">
                        Last Name <span className="text-red-500">*</span>
                    </h6>
                    <TextItem
                        name="lastName"
                        type="text"
                        required={true}
                        min={2}
                        placeholder="Enter last name"
                        max={128}
                        onChange={inputChangeHandler('lastName')}
                    />
                </div>
                <div className="space-y-2">
                    <h6 className="font-inter text-base text-customGray text-font16 font-semibold">WhatsApp Number</h6>
                    <PhoneNumberItem
                        name="phoneNumber"
                        required={true}
                        contact={{ phone: phoneNumber }}
                        onChange={phoneInputChangeHandler}
                    />
                </div>
                <div className="space-y-2">
                    <h6 className="font-inter text-base text-customGray text-font16 font-semibold">
                        Email <span className="text-red-500">*</span>
                    </h6>
                    <TextItem
                        name="emailAddress"
                        type="email"
                        placeholder="Enter email"
                        max={320}
                        required={true}
                        onChange={inputChangeHandler('emailAddress')}
                    />
                </div>
                <div className="space-y-2">
                    <h6 className="font-inter text-base text-customGray text-font16 font-semibold">
                        Role <span className="text-red-500">*</span>
                    </h6>
                    <div>
                        <DropdownSelector
                            items={roleItems}
                            name="role"
                            placeholder="Select Role"
                            required={true}
                            handleChange={(value: string) => setSelectedRole(value)}
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <ButtonThemeConfig buttonType={EConfigButtonType.PRIMARY}>
                        <Button
                            disabled={loading}
                            className="bg-primary rounded-md px-6 py-3 font-regular border-none hover:bg-customBlue text-white text-base font-semibold lg:h-9 2xl:h-[43px]"
                            htmlType="submit">
                            Create User
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
