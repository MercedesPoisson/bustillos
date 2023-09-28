import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import getServices from "./actions/getServices"; 
import getApartments from "./actions/getApartments";

function AutoRender() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getServices() as unknown as AnyAction);
            await dispatch(getApartments() as unknown as AnyAction);
            // Puedes agregar aquí más llamadas a otras acciones si es necesario
        };
        fetchData();
    }, [dispatch]);

    return null; 
}

export default AutoRender;