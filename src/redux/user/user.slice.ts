import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: {}
    },
    reducers: {
        // User
        userSuccess: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        userFailure: (state) => {
            return {
                ...state
            }
        }
    }
})

// Actions
export const { userSuccess, userFailure } = userSlice.actions

// Reducer
export default userSlice.reducer
