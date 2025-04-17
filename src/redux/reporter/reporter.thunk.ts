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

        store.dispatch(responseSuccess({ message }))
        return res
    } catch (error) {
        return execError(error)
    }
}

export const fetchReporterUsers = async (signal: AbortSignal, page: number, limit: number) => {
    try {
        const response = await Api.Reporter.fetchReporterUsers(signal, page, limit)
        return response
    } catch (error) {
        return execError(error)
    }
}
