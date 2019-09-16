import axios from 'axios';

export const GET_VALUE_AREA_START = 'GET_VALUE_AREA_START';
export const GET_VALUE_AREA_SUCCESS = 'GET_VALUE_AREA_SUCCESS';
export const GET_VALUE_AREA_FAIL = 'GET_VALUE_AREA_FAIL';

export const getValueArea = (formData, history) => dispatch => {
    dispatch({ type: GET_VALUE_AREA_START })
    console.log('GET_VALUE_AREA_START')
    axios
        .post('https://vp-app-be.herokuapp.com/api/coin/post', formData)
        .then(res => {
            dispatch({ type: GET_VALUE_AREA_SUCCESS, payload: res.data })
            history.push('/results')
            console.log('GET_VALUE_AREA_SUCCESS', res.data)
        })
        .catch(err => {
            dispatch({ type: GET_VALUE_AREA_FAIL, payload: err.data })
            console.log('GET_VALUE_AREA_FAIL')
        })
}