import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger';
import {todoReducer} from './reducer'

export default function configureAppStore(preloadedState: any) {
   return  configureStore({
        reducer: todoReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(createLogger()),
        preloadedState
    })
}