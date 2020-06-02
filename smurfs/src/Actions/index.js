import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_START"
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_START"

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });

    return axios.post('/smurfs')
    .then(res => {
        const postedSmurfInAction = { type: FETCHING_SMURF_SUCCESS, payload: res.data }
        dispatch(postedSmurfInAction);
    })
}