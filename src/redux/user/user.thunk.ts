import Api from '../customApi'
import { store } from '../store'
import execError from '../execError'
import { userSuccess } from './user.slice'
import { responseRequest, responseSuccess } from '../common/common.slice'
import { IUserData } from '../../types/state.types'

export const getProfile = async () => {
    try {
        store.dispatch(responseRequest())
        const res = await Api.User.getProfile()
        const { message, data } = res
        store.dispatch(responseSuccess(message))
        store.dispatch(userSuccess(data))
        return data
    } catch (error) {
        return execError(error)
    }
}

// Create User
export const createUser = async (reqBody: IUserData) => {
    try {
        store.dispatch(responseRequest())
        const data = await Api.User.createAdminUser(reqBody)
        const { message } = data
        store.dispatch(responseSuccess({ message }))
        return data
    } catch (error) {
        return execError(error)
    }
}

// Fetch Users
export const fetchUsers = async (signal: AbortSignal, page: number, limit: number) => {
    try {
        const response = await Api.User.fetchUsers(signal, page, limit)
        return response
    } catch (error) {
        return execError(error)
    }
}
