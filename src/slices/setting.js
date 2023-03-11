import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const settingSlice = createSlice( {
    name: 'setting',
    initialState: {
        loading: false
    },
    reducers: {
        setOptions: ( state, action ) => {
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        },
        setOption: ( state, action ) => {
            const new_state = {};
            _.set( new_state, action.payload.key, action.payload.value );
            return {
                ...state,
                ...new_state
            };
        },
    }
} );

//export actions
export const { setOptions, setOption } = settingSlice.actions;

//export selectors
export const selectorSetting = ( state ) => state.setting;
export const selectorThemeOptions = ( state ) => state.setting.themeOption;
export const selectorThemeDelearOptions = ( state ) => state.setting.themeDealerOption;

//export reducer
const settingReducer = settingSlice.reducer;
export default settingReducer;