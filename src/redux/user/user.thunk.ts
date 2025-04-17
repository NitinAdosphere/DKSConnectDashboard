import Api from '../customApi'
import { store } from '../store'
import execError from '../execError'
import { userSuccess } from './user.slice'
import { responseRequest, responseSuccess } from '../common/common.slice'

export const getProfile = async () => {
    try {
        store.dispatch(responseRequest())
        const res = await Api.User.getProfile()
        const { message, data } = res
        console.log('self_data:', data)
        store.dispatch(responseSuccess(message))
        store.dispatch(userSuccess(data))
        return data
    } catch (error) {
        return execError(error)
    }
}
