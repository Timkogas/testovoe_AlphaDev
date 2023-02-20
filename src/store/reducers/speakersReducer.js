import { 
    FETCH_SPEAKERS_FAILURE, 
    FETCH_SPEAKERS_REQUEST, 
    FETCH_SPEAKERS_SUCCESS 
} from "../actionTypes/speakersActionTypes";

const initialState = {
    speakers: [],
    error: null,
};

const speakersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SPEAKERS_REQUEST:
            return { ...state};
        case FETCH_SPEAKERS_SUCCESS:
            return { ...state, speakers: action.speakers.response};
        case FETCH_SPEAKERS_FAILURE:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default speakersReducer;