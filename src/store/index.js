import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './taskerSlice'

export default configureStore({
    reducer: {
        tasks: taskReducer,
    }
})
