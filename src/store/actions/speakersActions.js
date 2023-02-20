import axios from '../../axiosInstance'
import { FETCH_SPEAKERS_FAILURE, FETCH_SPEAKERS_REQUEST, FETCH_SPEAKERS_SUCCESS } from '../actionTypes/speakersActionTypes';



const fetchSpeakersRequest = () => {
    return { type: FETCH_SPEAKERS_REQUEST };
};
const fetchSpeakersSuccess = (speakers) => {
    return { type: FETCH_SPEAKERS_SUCCESS, speakers };
};
const fetchSpeakersFailure = (error) => {
    return { type: FETCH_SPEAKERS_FAILURE, error };
};


export const fetchSpeakers = () => {
    return async (dispatch) => {
        dispatch(fetchSpeakersRequest());
        try {
            const res = await axios.get("speakers");
            dispatch(fetchSpeakersSuccess(res.data))
        } catch (e) {
            dispatch(fetchSpeakersFailure(e));
        }
    };
};
