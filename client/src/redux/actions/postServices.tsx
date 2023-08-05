import { Dispatch } from "redux";
import { POST_SERVICES } from "./actionTypes";
import { AnyAction } from "redux";
import axios from "axios";

const postServices = (formData: FormData) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        await axios.post("http://localhost:3001/apartments")
    }
}