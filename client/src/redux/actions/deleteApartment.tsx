import { Dispatch } from 'redux';
import { DELETE_APARTMENT } from './actionTypes';
import { AnyAction } from 'redux';
import axios from 'axios';

const deleteApartments = (id: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const data = await axios.delete(`http://localhost:3001/apartments/${id}`);
    const apartments = [...data.data];
    dispatch({ type: DELETE_APARTMENT, payload: apartments });
  };
};

export default deleteApartments;