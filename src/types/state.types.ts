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
    phoneNumber?: string | null
    role: ERoleType
}

export interface IOnboardReporterBody {
    firstName: string
    lastName: string
    emailAddress: string
    phoneNumber: string | null
    accountType: EReporterAccountType
}

export enum EReporterAccountType {
    INDIVIDUAL_CREATOR = 'Individual Creator',
    MEDIA_AGENCY = 'Media Agency'
}
export interface IReporterWhatsappInfo {
    number: string
    isVerified: boolean
}
export interface IReporters {
    firstName: string
    lastName: string
    emailAddress: string
    whatsappInfo: IReporterWhatsappInfo | null
    accountType: EReporterAccountType
}
export interface IPagination {
    total: number
    page: {
        pages: number
        current: number
        hasNext: boolean
        hasPrev: boolean
    }
}
export interface IGetReportersResponse {
    reporters: IReporters[]
    meta: IPagination
}

export interface IUpdates {
    _id: string
    mediaName: string
    submittedUpdate: string
    views: string
    interactions: string
}
//
export enum ENewsUpdateTypes {
    KPCC_PRESIDENT = 'KPCC President',
    GOVERNMENT = 'Government',
    LOCAL = 'Local'
}
export enum EMediaTypes {
    JPG = 'jpg',
    PNG = 'png',
    JPEG = 'jpeg',
    MP4 = 'mp4'
}
export interface IMedia {
    type: EMediaTypes
    filePath: string
    extension: EMediaExtentionTypes
    publicUrl: string
}
export enum EMediaExtentionTypes {
    JPG = 'jpg',
    PNG = 'png',
    JPEG = 'jpeg',
    MP4 = 'mp4'
}
export interface INews {
    newsTitle: string
    brief: string
    newsType: ENewsUpdateTypes
    mediaFiles: IMedia[] | []
    isRemoved: boolean
    removedBy: string | null
}
export interface ICreateNewsBody {
    newsTitle: string
    brief: string
    newsType: ENewsUpdateTypes
}

export type TCreateNewsResponse = INews

export interface IGetNewsResponse {
    news: INews[]
    meta: IPagination
}
