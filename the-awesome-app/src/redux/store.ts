import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';


const reducer = combineReducers({
    auth: authReducer,
    
})

//store
export const store = configureStore({
    reducer: reducer,
    devTools: true
});


