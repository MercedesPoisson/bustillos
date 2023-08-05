import { Dispatch } from "redux";
import { POST_APARTMENT } from "./actionTypes";
// import { AnyAction } from "redux";
import axios from "axios";

const postApartment = (formData: FormData) => {
    return async (dispatch: Dispatch) => {
        try {
            console.log("Preparing to post...");
            const response = await axios.post("http://localhost:3001/apartments", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            
            // Dispara la acción después de que se complete la solicitud
            dispatch({ type: POST_APARTMENT, payload: response.data });
        } catch (error) {
            // Manejo de errores si es necesario
        }
    };
};

export default postApartment;