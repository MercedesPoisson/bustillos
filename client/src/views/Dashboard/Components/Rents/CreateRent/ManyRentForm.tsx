interface ManyRentsProps {
  formData: {
    guests_number: number;
    adults_number: number;
    kids_number: number;
    babies_number: number;
    pets: boolean;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ManyRentsForm: React.FC<ManyRentsProps> = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
}) => {
  return (
    <div className="w-1/2 p-4 font-Poppins">
      <h1 className="text-lg text-blue font-semibold font-Poppins mb-1">
        CUANTOS
      </h1>
      <div>
        <label>Cantidad de Adultos</label>
        <input
          type="adult_number"
          name="adults_number"
          placeholder="Cantidad de Adultos"
          value={formData.adults_number}
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label>Cantidad de Niños</label>
        <input
          type="kids_number"
          name="kids_number"
          placeholder="Cantidad de niños"
          value={formData.kids_number}
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label>Cantidad de bebés</label>
        <input
          type="babies_number"
          name="babies_number"
          placeholder="Mínimo de noches"
          value={formData.babies_number}
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label>¿Traen Mascotas?</label>
        <input
          type="checkbox"
          name="pets"
          className="mb-4 ml-2"
          checked={formData.pets}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default ManyRentsForm;
