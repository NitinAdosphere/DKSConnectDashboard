import { ChangeEventHandler, ReactNode } from 'react'
import { CountryData } from 'react-phone-input-2'

export interface PasswordInputProps {
    name: string
    required: boolean
    min?: number
    max?: number
    placeholder: string
    icon?: ReactNode
    onChange: ChangeEventHandler<HTMLInputElement>
    regex?: RegExp
    newPwd?: string | null
}
export interface TextItemProps {
    name: string
    required: boolean
    min?: number
    max?: number
    value?: string
    allowClear?: boolean
    defaultValue?: string
    type?: string
    className?: string
    icon?: ReactNode
    addonBefore?: ReactNode
    regexMsg?: string
    suffix?: ReactNode
    onChange: ChangeEventHandler<HTMLInputElement>
    readOnly?: boolean
    placeholder?: string
    regex?: RegExp
}

export interface TextAreaItemProps {
    name: string
    required: boolean
    min?: number
    max?: number
    placeholder?: string
    className?: string
    row?: number
    type?: string
    icon?: ReactNode
    onChange: ChangeEventHandler<HTMLTextAreaElement>
    readOnly?: boolean
    regex?: RegExp
}

export interface PhoneProps {
    name: string
    required: boolean
    contact: { phone: string }
    onChange: (phone: string, country: CountryData) => void
}

export enum EContentType {
    REEL = 'Reel',
    POST = 'Post',
    BOTH = 'Both'
}
