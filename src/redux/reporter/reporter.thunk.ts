import Api from '../customApi'
import { store } from '../store'
import execError from '../execError'
import { responseRequest, responseSuccess } from '../common/common.slice'
import { IOnboardReporterBody } from '../../types/state.types'

export const createReporter = async (payload: IOnboardReporterBody) => {
    try {
        store.dispatch(responseRequest())
        const res = await Api.Reporter.createUser(payload)
        const { message } = res
        console.log('masum', res)
        store.dispatch(responseSuccess({ message }))
        return res
    } catch (error) {
        return execError(error)
    }
}
