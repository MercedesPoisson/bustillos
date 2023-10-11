import { Dispatch } from "react";
import { GET_PRICES } from "./actionTypes";
import axios from "axios";
import { AnyAction } from "redux";

const getPrices = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const data = await axios.get("http://localhost:3001/prices");
        const prices = [...data.data];
        dispatch({type: GET_PRICES, payload: prices})
    };
};

export default getPrices;