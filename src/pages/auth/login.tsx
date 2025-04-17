import { Form } from 'antd'
import React, { useState } from 'react'
import { login } from '../../redux/auth/auth.thunk'
import { useNavigate } from 'react-router-dom'
import { EConfigButtonType } from '../../types/state.types'
import { ButtonThemeConfig } from '../../components/antdesign/configs.components'
import { TextItem, SubmitButton, PasswordInput } from '../../components/antdesign/form.components'

import Logo from '../../assets/reporter-logo.png'

const Login = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const [isDisabled, setIsDisabled] = useState(false)

    // states
    const [dataValues, setDataValues] = useState({
        emailAddress: '',
        password: ''
    })

    const { emailAddress, password } = dataValues

    const inputChangeHandler = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setDataValues({ ...dataValues, [name]: value })
    }

    const submitBtnHandler = () => {
        setIsDisabled(true)

        form.validateFields() // Validate the form fields
            .then(() => {
                return login(dataValues)
            })
            .then((response) => {
                if (response.success) {
                    navigate('/app/home')
                }
                setIsDisabled(false)
            })
            .catch(() => {
                setDataValues({ ...dataValues, password: '' })
                setIsDisabled(false)
            })
    }

    return (
        <div className="w-[400px] xl:w-[560px] lg:flex justify-center items-center gap-40 font-inter">
            <div className="bg-white px-[50px] rounded-3xl border border-[#B4D6EC] py-10 w-full flex flex-col space-y-4 2xl:space-y-5">
                <div className="flex text-center justify-center items-center">
                    <img
                        src={Logo}
                        alt="logo"
                        className="w-[120px]"
                    />
                </div>

                <Form
                    form={form}
                    className="flex flex-col w-full gap-2 xl:gap-4"
                    onFinish={submitBtnHandler}
                    fields={[
                        {
                            name: 'emailAddress',
                            value: emailAddress
                        },
                        {
                            name: 'password',
                            value: password
                        }
                    ]}>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="emailAddress"
                            className="text-xl font-semibold text-secondary">
                            User ID
                        </label>
                        <TextItem
                            name="emailAddress"
                            type="text"
                            placeholder="Enter user ID"
                            required={true}
                            onChange={inputChangeHandler('emailAddress')}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-xl font-semibold text-secondary">
                            Password
                        </label>
                        <PasswordInput
                            name="password"
                            required={true}
                            placeholder="Enter password"
                            onChange={inputChangeHandler('password')}
                        />
                    </div>

                    <div className="pt-4">
                        <ButtonThemeConfig buttonType={EConfigButtonType.PRIMARY}>
                            <SubmitButton
                                text="Login"
                                disabled={isDisabled}
                                className="bg-primary rounded-md font-regular border-none hover:bg-customBlue text-white w-full text-md 2xl:text-xl font-semibold lg:h-9 2xl:h-12"
                            />
                        </ButtonThemeConfig>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login
