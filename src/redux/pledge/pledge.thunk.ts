import Api from '../customApi'
import execError from '../execError'
import { IResponse } from '../../types/selector.types'
import { IPledge } from '../../types/state.types'

export const fetchPledge = async (signal: AbortSignal, entity: string, page: number, limit: number): Promise<IResponse<Array<IPledge>> | null> => {
    try {
        const data: IResponse<Array<IPledge>> = await Api.Pledge.fetchPledge(signal, entity, page, limit)
        return data
    } catch (error) {
        return execError(error)
    }
}
