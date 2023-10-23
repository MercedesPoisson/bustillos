import { Dispatch } from 'redux';
import { POST_GUEST } from './actionTypes';
import axios from 'axios';

const postGuests = (guestData: FormData) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log("Preparing to post...");
      const response = await axios.post(`http://localhost:3001/guests/`, guestData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      dispatch({ type: POST_GUEST, payload: response.data });
      console.log("Datos enviados a la base de datos, formData", response.data );
      
    } catch (error) {
      // Maneja el error aquí
      console.error("Error posting guests:", error);
    }
  };
};

export default postGuests;