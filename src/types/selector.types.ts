import { IUpdates, IUserData } from './state.types'

export interface CommonState {
    error: string | null
    message: string | null
    loading: boolean
}

export interface AuthState {
    isDefaultPasswordChanged: boolean
    isLoggedIn: boolean
}
export enum ERoleType {
    ADMIN = 'Admin',
    MANAGER = 'Manager'
}
export enum EAccountType {
    INDIVIDUAL_CREATOR = 'Individual Creator',
    MEDIA_AGENCY = 'Media Agency'
}
export interface RootState {
    Common: CommonState
    Auth: AuthState
    User: { user: IUserData }
    Update: { update: IUpdates }
}

export interface IResponse<T = any> {
    success: boolean
    status: number
    request: {
        id: string
        method: string
        ip: string
        url: string
    }
    meta: {
        total: number
        page: {
            pages: number
            current: number
            hasNext: boolean
            hasPrev: boolean
        }
    }
    message: string
    data: T
}
