import { Dispatch } from "redux";
import { GET_GUESTS } from "./actionTypes";
import { AnyAction } from "redux";
import axios, {AxiosResponse} from "axios";
import { Guests } from "../interfaces";

const getGuestByRentId = async (id_rent: number, dispatch: Dispatch<AnyAction>) => {
    try {
      const response: AxiosResponse<Guests[]> = await axios.get(`http://localhost:3001/guests/${id_rent}`);
      const guest = response.data;
      dispatch({ type: GET_GUESTS, payload: guest });
      return response;
    } catch (error) {
      console.error("Error fetching guests:", error);
      throw error;
    }
  };

export default getGuestByRentId;