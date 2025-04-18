import Api from '../customApi'
import execError from '../execError'
import { IResponse } from '../../types/selector.types'
import { INews } from '../../types/state.types'
import { responseSuccess } from '../common/common.slice'
import { store } from '../store'

export const getAllUpdates = async (signal: AbortSignal, page: number, limit: number): Promise<IResponse<Array<INews>> | null> => {
    try {
        const data: IResponse<Array<INews>> = await Api.Update.fetchAllUpdates(signal, page, limit)
        return data
    } catch (error) {
        return execError(error)
    }
}

export const createUpdate = async (reqBody: FormData) => {
    try {
        const data = await Api.Update.createUpdates(reqBody)
        const { message } = data
        store.dispatch(responseSuccess({ message }))
        return data
    } catch (error) {
        return execError(error)
    }
}
