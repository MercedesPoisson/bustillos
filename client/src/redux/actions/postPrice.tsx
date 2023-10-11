import { Dispatch } from "redux";
import { POST_PRICE } from "./actionTypes";
import axios from "axios";

const postPrice = (formData: FormData) => {
    return async (dispatch: Dispatch) => {
        try {
            console.log("Preparing to post...");
            const response = await axios.post("http://localhost:3001/prices", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            
            // Dispara la acción después de que se complete la solicitud
            dispatch({ type: POST_PRICE, payload: response.data });
        } catch (error) {
            // Manejo de errores si es necesario
        }
    };
};

export default postPrice;