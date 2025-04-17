import { ERoleType } from './selector.types'

export interface LoginPayload {
    emailAddress: string
    password: string
}

export interface ItemType {
    key: string
    value: string
    label: string | JSX.Element
    desc: string
}

export enum EConfigButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TRANSPARENT = 'transparent'
}

export enum ESourceType {
    WEB = 'Web',
    MOBILE = 'Mobile'
}

export interface IUserData {
    emailAddress: string
    firstName: string
    lastName: string
    role: ERoleType
    _id: string
}

export interface IReporters {
    _id: string
    mediaName: string
    submittedUpdate: string
    views: string
    interactions: string
}

export interface IUpdates {
    _id: string
    mediaName: string
    submittedUpdate: string
    views: string
    interactions: string
}
