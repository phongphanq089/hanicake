import { configureStore } from '@reduxjs/toolkit';
import customizerReducer from '@slices/customizer';
import settingReducer from '@slices/setting';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from "redux";

const rootReducer = combineReducers( {
    customizer: customizerReducer,
    setting: settingReducer
} );

// create a makeStore function
const makeStore = ( ( initialState, options ) => {
    const store = configureStore( {
        reducer: rootReducer
    } );
    return store;
} );

// export an assembled wrapper
export const wrapper = createWrapper( makeStore, { debug: false } );