import userSlice from './user/user.slice'
import CommonSlice from './common/common.slice'
import updateSlice from './allUpdate/update.slice'
import { configureStore, combineReducers, Action } from '@reduxjs/toolkit'

const allReducers = combineReducers({
    User: userSlice,
    Common: CommonSlice,
    Updates: updateSlice
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: Action) => {
    if (action.type === 'Reset/resetState') {
        return allReducers(undefined, action)
    }

    return allReducers(state, action)
}

const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.VITE_MODE === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export { store }
