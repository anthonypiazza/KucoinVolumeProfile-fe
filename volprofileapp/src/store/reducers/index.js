import {
    GET_VALUE_AREA_START,
    GET_VALUE_AREA_SUCCESS,
    GET_VALUE_AREA_FAIL
} from '../actions';

const initialState = {
    isGetting: false,
    valueAreaObject: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_VALUE_AREA_START:
            return {
                ...state,
                isGetting: true
            }
        case GET_VALUE_AREA_SUCCESS:
            return{ 
                isGetting: false,
                valueAreaObject: action.payload
            }
        case GET_VALUE_AREA_FAIL:
            return {
                isGetting: false,
                valueAreaObject: action.payload
            }
        default:
            return state
    }
}