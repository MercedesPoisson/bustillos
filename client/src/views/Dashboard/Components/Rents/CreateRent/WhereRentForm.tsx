import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../../redux/Types";

interface whereRentProps {
    formData: {
    id_apartment: number,
    }
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const WhereRentForm: React.FC<whereRentProps> = ({ formData, handleInputChange }) => {
    const apartments = useSelector((state: State) => state.apartments);


    return(
        <div className="w-1/2 p-4 font-Poppins">
            <h1 className="text-lg text-blue font-semibold font-Poppins mb-1">
        DONDE
      </h1>
      <div>
        <label>Departamento:</label>
          <select
            name="id_apartment"
            value={formData.id_apartment || ""}
            onChange={handleInputChange}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar departamento</option>
            {apartments.map((departamento) => (
              <option
                key={departamento.id_apartment}
                value={departamento.id_apartment.toString()}
              >
                {departamento.title}
              </option>
            ))}
          </select>
      </div>
          
        </div>
    )
}

export default WhereRentForm;