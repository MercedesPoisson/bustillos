import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import getServices from "./actions/getServices"; 

function AutoRender() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getServices() as unknown as AnyAction);
            // Puedes agregar aquí más llamadas a otras acciones si es necesario
        };
        fetchData();
    }, [dispatch]);

    return null; 
}

export default AutoRender;