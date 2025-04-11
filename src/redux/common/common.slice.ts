import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
    name: 'Common',
    initialState: {
        loading: true,
        error: null,
        message: null
    },
    reducers: {
        // Login
        responseRequest: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        responseSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        },
        responseFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload.message
            }
        },
        startLoading: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        clearLoading: (state) => {
            return {
                ...state,
                loading: false
            }
        },
        createError: (state, action) => {
            return {
                ...state,
                error: action.payload.message
            }
        },
        createMessage: (state, action) => {
            return {
                ...state,
                message: action.payload.message
            }
        },

        clearError: (state) => {
            return {
                ...state,
                error: null
            }
        },
        clearMessage: (state) => {
            return {
                ...state,
                message: null
            }
        }
    }
})

// Actions
export const { clearError, clearLoading, clearMessage, createError, createMessage, responseFail, responseRequest, responseSuccess, startLoading } =
    commonSlice.actions

// Reducer
export default commonSlice.reducer
