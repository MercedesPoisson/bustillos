import React from "react";

interface SourceRentProps {
  formData: {
    source: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const SourceRentForm: React.FC<SourceRentProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="w-1/2 p-4 font-Poppins">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">FUENTE</h1>
      <div>
        <label>¿Por donde se vendió?</label>
        <select
          name="source"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.source}
          onChange={handleInputChange}
        >
          <option value="Airbnb">Airbnb</option>
          <option value="Interpatagonia">Interpatagonia</option>
          <option value="Parairnos">Parairnos</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Revendedora 1">Revendedora 1</option>
          <option value="Revendedora 2">Revendedora 2</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
  );
}

export default SourceRentForm;