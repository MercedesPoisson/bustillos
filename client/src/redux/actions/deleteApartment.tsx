import { Dispatch } from 'redux';
import { DELETE_APARTMENT } from './actionTypes';
import { AnyAction } from 'redux';
import axios from 'axios';

const deleteApartments = (id: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      await axios.delete(`http://localhost:3001/apartments/${id}`);

      dispatch({ type: DELETE_APARTMENT, payload: id });
    } catch (error) {
      console.error('Error al eliminar el apartamento:', error);
    }
  };
};

export default deleteApartments;