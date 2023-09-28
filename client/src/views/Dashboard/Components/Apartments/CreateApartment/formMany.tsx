interface ManyProps {
    formData: {
      // price_per_night: string;
      max_guests: string;
      min_nights: string;
    };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const FormMany: React.FC<ManyProps> = ({ formData, handleInputChange }) => {
    return(
        <div>
            {/* <input
                type="number"
                name="price_per_night"
                placeholder="Precio Por Noche"
                value={formData.price_per_night}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              /> */}

              <input
                type="number"
                name="max_guests"
                placeholder="Máximo de Húespedes"
                value={formData.max_guests}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />

              <input
                type="number"
                name="min_nights"
                placeholder="Mínimo de noches"
                value={formData.min_nights}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />
        </div>
    )
}
export default FormMany;