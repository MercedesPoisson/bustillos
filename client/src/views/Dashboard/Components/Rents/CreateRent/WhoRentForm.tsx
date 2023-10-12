import React from "react";

interface whoRentsProps {
  formData: {
    name: string;
    surname: string;
    phone: string;
    mail: string;
    cuit_dni: string;
    car: boolean;
    car_plate: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WhoRentsForm: React.FC<whoRentsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="w-1/2 p-4 font-Poppins">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
        QUIEN
      </h1>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.name}
            onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="surname"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
            value={formData.surname}
                onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          name="phone"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.phone}
            onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Correo Electrónico:</label>
        <input
          type="text"
          name="mail"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
            value={formData.mail}
                onChange={handleInputChange}
        />
      </div>

      <div>
        <label>CUIT o DNI:</label>
        <input
          type="text"
          name="cuit_dni"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
            value={formData.cuit_dni}
                onChange={handleInputChange}
        />
      </div>

      <div>
        <label>¿Tiene automóvil?</label>
        <input type="checkbox" name="car" className="mb-4 ml-2" 
        value={formData.car.toString()}
        />

      </div>

      <div>
        <label>Patente del automóvil:</label>
        <input
          type="text"
          name="car_plate"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
            value={formData.car_plate}
                onChange={handleInputChange}
        />
      </div>

      
    </div>
  );
};
export default WhoRentsForm;
