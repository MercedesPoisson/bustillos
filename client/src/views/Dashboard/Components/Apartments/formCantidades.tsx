interface FormCantidadesProps {
    formData: {
      room_number: string;
      bath_number: string;
      bed_number: string;
      sofabed_number: string;
    };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const FormCantidades: React.FC<FormCantidadesProps> = ({ formData, handleInputChange }) => {
  return (
  <div>
    <input
                type="text"
                placeholder="Número de cuartos"
                value={formData.room_number}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Número de baños"
                value={formData.bath_number}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />

              <input
                type="text"
                placeholder="Número de Camas"
                value={formData.bed_number}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />

              <input
                type="text"
                placeholder="Número de sofa cama"
                value={formData.sofabed_number}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />

  </div>
  )
};
export default FormCantidades;
