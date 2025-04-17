import { Rule } from 'antd/es/form'
import 'react-phone-input-2/lib/style.css'
import TextArea from 'antd/es/input/TextArea'
import { ItemType } from '../../types/state.types'
import { RangePickerProps } from 'antd/es/date-picker'
import PhoneInput, { CountryData } from 'react-phone-input-2'
// import DownArrow from '../../assets/images/keyboard_arrow_down.svg'
import { TextItemProps, TextAreaItemProps, PhoneProps, PasswordInputProps } from '../../types/form.components.types'
import { Button, Form, Input, Checkbox, CheckboxProps, Select, DatePicker, DatePickerProps, ConfigProvider } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons'
import { message } from 'antd'

type HandleFileUpload = (file: File) => boolean

export const PasswordInput = ({ name, min, max, required = true, placeholder, icon, onChange, regex, newPwd = null }: PasswordInputProps) => {
    const rules: Rule[] = [{ required, message: `Please enter password` }]
    if (regex) {
        rules.push({
            pattern: regex,
            message: `The password must contain a mixture of letters, numbers and symbols.`
        })
    }
    if (min) {
        rules.push({
            min,
            message: `Password must be more than ${min} characters`
        })
    }

    if (max) {
        rules.push({
            max,
            message: `Password must be under ${max} characters`
        })
    }
    if (newPwd) {
        rules.push({
            pattern: new RegExp(`^${newPwd}$`),
            message: 'Your password does not match the new password'
        })
    }

    return (
        <Form.Item
            name={name}
            className="w-full mb-0"
            rules={rules}>
            <Input.Password
                className="2xl:h-12 md:h-9 text-secondary text-base rounded-lg font-inter border border-[#e5e5e6] focus-within:shadow-none focus:border-[#868E96] hover:border-[#868E96] focus-within:border-[#868E96]  transition ease-in duration-500"
                placeholder={placeholder}
                autoComplete="off"
                prefix={icon}
                onChange={onChange}
            />
        </Form.Item>
    )
}

export const TextItem = ({
    name,
    required = true,
    min,
    max,
    value,
    icon,
    allowClear = false,
    type = 'text',
    className,
    onChange,
    addonBefore,
    suffix,
    readOnly = false,
    regex,
    regexMsg,
    placeholder,
    defaultValue
}: TextItemProps) => {
    const rules: Rule[] = [{ required, message: `Please ${placeholder?.toLowerCase()}` }]
    const customMessage = placeholder?.split(' ').slice(1).join(' ')
    if (min) {
        rules.push({
            min,
            message: `${customMessage ? customMessage?.charAt(0)?.toUpperCase() + customMessage?.slice(1) : name} must be more than ${min} characters`
        })
    }

    if (max) {
        rules.push({
            max,
            message: `${customMessage ? customMessage?.charAt(0)?.toUpperCase() + customMessage?.slice(1) : name} must be under ${max} characters`
        })
    }
    if (type === 'email') {
        rules.push({
            type,
            message: `Please enter valid email`
        })
    }
    if (regex) {
        rules.push({
            pattern: regex,
            message: regexMsg ? regexMsg : `Please enter proper content`
        })
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (/[\\[\(*+]/.test(event.key)) {
            event.preventDefault()
        }
    }

    return (
        <Form.Item
            name={name}
            className="w-full mb-0"
            rules={rules}>
            <Input
                type={type}
                prefix={icon}
                suffix={suffix}
                readOnly={readOnly}
                defaultValue={defaultValue}
                autoComplete="off"
                addonBefore={addonBefore}
                allowClear={allowClear}
                value={value}
                onKeyPress={name === 'UserName' ? handleKeyPress : undefined}
                onChange={onChange}
                className={
                    className
                        ? className
                        : '2xl:h-12 md:h-9 text-secondary text-base rounded-md font-inter border border-[#e5e5e6] focus-visible:shadow-none focus:border-[#868E96] hover:border-[#868E96] transition ease-in duration-500 font-medium'
                }
                placeholder={placeholder}
            />
        </Form.Item>
    )
}

export const TextAreaItem = ({ name, required = true, min, max, row = 7, onChange, placeholder, className }: TextAreaItemProps) => {
    const rules: {
        required?: boolean
        message: string
        min?: number
        max?: number
    }[] = [{ required, message: `Please enter ${name}.` }]

    if (min) {
        rules.push({
            min,
            message: `${name.charAt(0).toUpperCase() + name.slice(1)} must be more than ${min} characters`
        })
    }

    if (max) {
        rules.push({
            max,
            message: `${name.charAt(0).toUpperCase() + name.slice(1)} must be under  ${max} characters`
        })
    }

    return (
        <Form.Item
            name={name}
            className="w-full"
            rules={rules}>
            <TextArea
                autoSize={{ maxRows: row, minRows: row }}
                placeholder={placeholder}
                rows={row}
                className={
                    className
                        ? className
                        : 'h-8 2xl:h-12 font-medium text-base resize-none  rounded-md transition focus-visible:shadow-none focus:border-[#868E96] hover:border-[#868E96] ease-in duration-500'
                }
                onChange={onChange}
            />
        </Form.Item>
    )
}

export const CheckBox = ({
    label,
    required,
    name,
    checked,
    onChange,
    disabled = false
}: {
    label: string
    required: boolean
    name: string
    checked: boolean
    onChange: CheckboxProps['onChange']
    disabled?: boolean
}) => {
    return (
        <Form.Item
            name={name}
            required={required}
            className="text-base font-medium"
            rules={required ? [{ validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error(`${name} is required`))) }] : []}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#1f3040',
                        colorPrimaryHover: '#1f3040'
                    }
                }}>
                <Checkbox
                    onChange={onChange}
                    checked={checked}
                    disabled={disabled}
                    name={name} // Ensure name is passed correctly
                >
                    {label}
                </Checkbox>
            </ConfigProvider>
        </Form.Item>
    )
}

export const SubmitButton = ({ text, className, disabled = false }: { text: string; className?: string; disabled?: boolean }) => {
    return (
        <Button
            type="default"
            disabled={disabled}
            htmlType="submit"
            className={
                className ? className : 'bg-secondary font-regular border-none text-white w-full text-md 2xl:text-base font-normal lg:h-9 2xl:h-12'
            }>
            {text}
        </Button>
    )
}

export const PhoneNumberItem = ({ name = 'phone', contact, onChange }: PhoneProps) => {
    return (
        <Form.Item
            name={name}
            className="w-full"
            rules={[{ required: true, message: 'Please enter your phone number' }]}>
            <PhoneInput
                countryCodeEditable={false}
                placeholder="Enter your number"
                country={'in'}
                value={contact.phone}
                onChange={(phone, country) => onChange(phone, country as CountryData)}
                inputStyle={{ width: '100%', height: '40px' }}
            />
        </Form.Item>
    )
}

export const DropdownSelector = ({
    items,
    defaultValue,
    name,
    placeholder,
    mode = undefined,
    height,
    handleChange,
    allowClear = true,
    required
}: {
    items: Array<ItemType>
    defaultValue?: string
    name: string
    height?: string
    mode?: 'multiple' | 'tags' | undefined
    placeholder: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange: any
    allowClear?: boolean
    required: boolean
}) => {
    return (
        <Form.Item
            name={name}
            className="w-full"
            rules={required ? [{ required: true, message: 'Select the value' }] : []}>
            <Select
                className={
                    height
                        ? `2xl:h-[${height}] md:h-9 text-sm font-inter !rounded-md hover:outline-secondary font-medium`
                        : `2xl:h-12 md:h-9 2xl:text-base md:text-sm font-inter !rounded-md hover:outline-secondary font-medium`
                }
                optionLabelProp="label"
                mode={mode}
                placeholder={placeholder}
                // suffixIcon={<img src={DownArrow} />}
                allowClear={allowClear}
                onChange={handleChange}
                filterOption={(input, option) => {
                    if (typeof option?.label === 'object' && 'props' in option.label) {
                        const labelText = option.label.props.children?.[1]?.props?.children ?? ''
                        return labelText.toLowerCase().includes(input.toLowerCase())
                    }
                    // Fallback to `desc` field or string label
                    return (option?.desc ?? '').toLowerCase().includes(input.toLowerCase())
                }}
                defaultValue={defaultValue}
                options={items}
                showSearch
            />
        </Form.Item>
    )
}

export const DatePickerItem = ({
    name,
    placeholder,
    onChange,
    disabledDate,
    required
}: {
    name: string
    placeholder: string
    onChange: DatePickerProps['onChange']
    required: boolean
    disabledDate?: RangePickerProps['disabledDate']
}) => {
    return (
        <Form.Item
            name={name}
            className="w-full"
            rules={required ? [{ required: true, message: 'Please select this option!' }] : []}>
            <ConfigProvider
                theme={{
                    components: {
                        DatePicker: {
                            cellHoverBg: '#868E96',
                            addonBg: '#868E96'
                        }
                    }
                }}>
                <DatePicker
                    format="DD-MM-YYYY" // Display format
                    disabledDate={disabledDate}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="h-12 w-full text-base font-inter font-medium border rounded-lg  focus-visible:shadow-none focus:border-[#868E96] hover:border-[#868E96]"
                />
            </ConfigProvider>
        </Form.Item>
    )
}
export const UploadFile = ({
    handleFileUpload,
    accept,
    isUploading
}: {
    handleFileUpload: HandleFileUpload
    accept: string
    isUploading: boolean
}) => {
    return (
        <>
            <Dragger
                name="file"
                height={180}
                accept={accept}
                beforeUpload={handleFileUpload}
                multiple={false}
                onDrop={(e) => message.info(`Dropped ${e.dataTransfer.files.length} files`)}
                className={isUploading ? 'dragger-animation' : ''}>
                <p className="ant-upload-drag-icon">
                    {isUploading ? (
                        <LoadingOutlined
                            className="upload-animation"
                            style={{ fontSize: '40px', color: '#E27670' }}
                        />
                    ) : (
                        <InboxOutlined style={{ fontSize: '40px', color: '#E27670' }} />
                    )}
                </p>
                <p className="text-lg text-secondary font-dmSans">Click or drag file to this area to upload</p>
                <p className="text-sm text-customGray font-dmSans">Supported Formats : {accept.toUpperCase()} Only</p>
            </Dragger>
        </>
    )
}
