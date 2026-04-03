//not from react-redux(2nd package we installed the bridge between redux and react) 
// but from core redux)
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' //registering the reducers in this store

export const store= configureStore({
    reducer:{todo:todoReducer} // to access
    // reducer:todoReducer
}) //takes an object
