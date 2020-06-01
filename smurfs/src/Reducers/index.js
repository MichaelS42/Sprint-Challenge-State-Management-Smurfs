import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE } from '../actions'

const initialState = {
        smurf: null,
        isFetching: false,
        error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case: FETCHING_SMURF_START
        return { ...state,
        isFetching: true
    };
    case: FETCHING_SMURF_SUCCESS
        return { ...state,
        isFetching: false,
        smurf: action.payload
    };
    case: FETCHING_SMURF_FAILURE
        return { ...state,
        isFetching: false,
        error: "err"
    };
        default:
            return state;
    }
}