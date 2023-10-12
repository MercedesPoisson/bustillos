import { Dispatch } from "redux";
import { GET_RENTS } from "./actionTypes";
import { AnyAction } from "redux";
import axios from "axios";

const getRents = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get("http://localhost:3001/rents");
        const apartments = [...data.data];
        dispatch({type: GET_RENTS, payload: apartments})
    };
};

export default getRents;