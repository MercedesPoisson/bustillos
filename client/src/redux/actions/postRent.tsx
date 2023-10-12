import { Dispatch } from "redux";
import { POST_RENT } from "./actionTypes";
import axios from "axios";

const postRent = (formData: FormData) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/rents", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            dispatch({ type: POST_RENT, payload: response.data });
        } catch (error) {
            
        }
    }
};
    export default postRent;