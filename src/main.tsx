import './index.css'

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store.ts'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Router from './router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Provider store={store}>
            <ToastContainer newestOnTop />
            {/* <App /> */}
            <RouterProvider router={Router} />
        </Provider>
    </>
)
