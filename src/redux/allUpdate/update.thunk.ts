import Api from '../customApi'
import execError from '../execError'
import { IResponse } from '../../types/selector.types'
import { IUpdates } from '../../types/state.types'

export const fetchUpdates = async (signal: AbortSignal, entity: string, page: number, limit: number): Promise<IResponse<Array<IUpdates>> | null> => {
    try {
        const data: IResponse<Array<IUpdates>> = await Api.Update.fetchUpdate(signal, entity, page, limit)
        return data
    } catch (error) {
        return execError(error)
    }
}
