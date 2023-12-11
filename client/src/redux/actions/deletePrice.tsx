import { Dispatch } from "redux";
import { DELETE_PRICE } from "./actionTypes";
import { AnyAction } from "redux";
import axios from "axios";

const deletePrice = (id: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      await axios.delete(`http://localhost:3001/prices/${id}`);

      dispatch({ type: DELETE_PRICE, payload: id });
    } catch (error) {
      console.error("Error al eliminar el precio:", error);
    }
  };
};

export default deletePrice;