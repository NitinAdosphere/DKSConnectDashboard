import axios from 'axios'

// Create an instance of Axios
const apiInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/v1`,
    withCredentials: true,

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

// const refreshToken = async (payload = {}) => {
//     try {
//         await axios.put(`${window.location.origin}/agency/refresh-token`, payload, {
//             withCredentials: true
//         })
//     } catch (error) {
//         throw error
//     }
// }

// Axios Interceptor (Response)
apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        // const originalRequest = error.config

        // if (error?.response?.status === 401 && !originalRequest._isRetry) {
        //     try {
        //         originalRequest._isRetry = true
        //         const headers = { ...originalRequest.headers }

        //         await refreshToken()
        //         return apiInstance.request({ ...originalRequest, headers })
        //     } catch (err) {
        //         store.dispatch(userFailure())
        //         store.dispatch(resetState())
        //         return Promise.reject(err)
        //     }
        // } else if (error?.response?.status === 429) {
        //     store.dispatch(userFailure())
        //     store.dispatch(resetState())
        // }

        return Promise.reject(error)
    }
)

// Exporting Api
export default {
    Auth: {
        login: async (payload = {}) => {
            const { data } = await apiInstance.post('/admin/login', payload)
            return data
        },
        logout: async () => {
            const { data } = await apiInstance.put('/admin/logout')
            return data
        }
    },

    User: {
        getProfile: async () => {
            const { data } = await apiInstance.get('/admin/self')
            return data
        },
        createAdminUser: async (payload = {}) => {
            const { data } = await apiInstance.post(`/admin`, payload, {})
            return data
        },
        fetchUsers: async (signal: AbortSignal, page: number, limit: number) => {
            const queryParams = {
                page,
                limit
            }
            const { data } = await apiInstance.get(`/admin`, {
                params: queryParams,
                signal
            })
            return data
        }
    },
    Reporter: {
        createUser: async (payload = {}) => {
            const { data } = await apiInstance.post('/admin/reporter', payload)
            return data
        },
        fetchReporterUsers: async (signal: AbortSignal, page: number, limit: number) => {
            const queryParams = {
                page,
                limit
            }
            const { data } = await apiInstance.get(`/admin/reporter`, {
                params: queryParams,
                signal
            })
            return data
        }
    },

    Update: {
        //  Create News
        createUpdates: async (payload: FormData) => {
            const { data } = await apiInstance.post(`/admin/news`, payload, { headers: { 'Content-Type': 'multipart/form-data' } })
            return data
        },
        // For All get News
        fetchAllUpdates: async (signal: AbortSignal, page: number, limit: number) => {
            const queryParams = {
                page,
                limit
            }
            const { data } = await apiInstance.get(`/admin/news`, {
                params: queryParams,
                signal
            })
            return data
        }
    }
}
