import { createSlice } from '@reduxjs/toolkit'

export const updateSlice = createSlice({
    name: 'Updates',
    initialState: {
        selectedUpdate: null
    },
    reducers: {
        setSelectedUpdate: (state, action) => {
            return {
                ...state,
                selectedUpdate: action.payload
            }
        }
    }
})

// Actions
export const { setSelectedUpdate } = updateSlice.actions

// Reducer
export default updateSlice.reducer
