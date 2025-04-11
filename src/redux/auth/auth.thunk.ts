import Api from '../customApi'
import { store } from '../store.ts'
import execError from '../execError.ts'
import { LoginPayload } from '../../types/state.types.ts'
import { responseRequest, responseSuccess } from '../common/common.slice.ts'

export const login = async (reqBody: LoginPayload) => {
    try {
        store.dispatch(responseRequest())
        const data = await Api.Auth.login(reqBody)
        const { message } = data
        store.dispatch(responseSuccess({ message }))
        return data
    } catch (error) {
        return execError(error)
    }
}

export const logout = async () => {
    try {
        store.dispatch(responseRequest())
        const data = await Api.Auth.logout()

        const { message } = data
        store.dispatch(responseSuccess({ message }))

        return data
    } catch (error) {
        return execError(error)
    }
}
