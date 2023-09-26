import { Dispatch } from "redux";
import { GET_APARTMENTS } from "./actionTypes";
import { AnyAction } from "redux";
import axios from "axios";

const getApartments = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get("http://localhost:3001/apartments");
        const apartments = [...data.data];
        dispatch({type: GET_APARTMENTS, payload: apartments})
    };
};

export default getApartments;