import { Reducer } from "redux";
import { State, Action } from "./Types";
import {
  GET_SERVICES,
  GET_APARTMENTS,
  POST_APARTMENT,
  PUT_APARTMENT,
  DEACTIVATE_APARTMENT,
  GET_RENTS,
  POST_RENT,
  PUT_RENT,
  DELETE_RENT,
  DELETE_APARTMENT,
  GET_PRICES,
  DELETE_PRICE,
  POST_PRICE,
  POST_GUEST,
  GET_GUESTS,
} from "./actions/actionTypes";

const inictialState: State = {
  services: [],
  apartments: [],
  detail: {},
  user: {},
  favorites: [],
  rents: [],
  price: [],
  guests: [],
};

const rootReducer: Reducer<State, Action> = (
  state = inictialState,
  { type, payload }
) => {
  switch (type) {
    case GET_SERVICES:
      return { ...state, services: payload };
    case GET_APARTMENTS:
      console.log("Datos de apartamentos recibidos:", payload);
      return { ...state, apartments: payload };
    case POST_APARTMENT:
      return { ...state };
    case PUT_APARTMENT:
      return { ...state };
    case DEACTIVATE_APARTMENT:
      return { ...state };
    case DELETE_APARTMENT:
      // Elimina el apartamento del estado
      const updatedApartments = state.apartments.filter(
        (apartment) => apartment.id_apartment !== payload
      );
      return { ...state, apartments: updatedApartments };
    case GET_RENTS:
      console.log("Datos de reservas recibidos:", payload);

      return { ...state, rents: payload };
    case POST_RENT:
      return { ...state };
    case PUT_RENT:
      return { ...state };
    case DELETE_RENT:
      return { ...state };
    case GET_PRICES:
      return { ...state, price: payload };
    case POST_PRICE:
      return { ...state };
    case DELETE_PRICE:
      const updatedPrices = state.price.filter(
        (price) => price.id_price !== payload
      );
      return { ...state, price: updatedPrices };
    case POST_GUEST:
      return { ...state, guests: payload };
    case GET_GUESTS:
      return { ...state, guests: payload };
    default:
      return state;
  }
};
export default rootReducer;
