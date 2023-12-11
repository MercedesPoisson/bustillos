import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postPrice from "../../../../redux/actions/postPrice";
import { State } from "../../../../redux/Types";
import Swal from "sweetalert2";

interface PricesFormData {
  id_apartment: number;
  title: string;
  price_per_night_pesos: number;
  price_per_night_dolar: number;
  season: string;
}

const SetPrices = () => {
  const dispatch = useDispatch();
  const apartments = useSelector((state: State) => state.apartments);
  const [formData, setFormData] = useState<PricesFormData>({
    id_apartment: 0,
    title: "",
    price_per_night_pesos: 0,
    price_per_night_dolar: 0,
    season: "media",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      if (name === "title") {
        const selectedApartment = apartments.find(
          (apartment) => apartment.id_apartment.toString() === value
        );
        if (selectedApartment) {
          return {
            ...prevData,
            id_apartment: selectedApartment.id_apartment,
            title: selectedApartment.title,
          };
        }
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handlePostPrice = async () => {
    const newForm = new FormData();
    newForm.append("id_apartment", formData.id_apartment.toString());
    newForm.append("title", formData.title);
    newForm.append(
      "price_per_night_pesos",
      formData.price_per_night_pesos.toString()
    );
    newForm.append(
      "price_per_night_dolar",
      formData.price_per_night_dolar.toString()
    );
    newForm.append("season", formData.season);

    debugger;
    try {
      // Realiza la solicitud y espera la respuesta
      await postPrice(newForm)(dispatch);

      // Muestra el SweetAlert si la solicitud fue exitosa
      Swal.fire({
        title: "Precio creado con éxito",
        text: "Tu precio ha sido creado exitosamente.",
        icon: "success",
        timer: 6000,
        showConfirmButton: false,
      });
      
      // Reinicia el formulario o realiza otras acciones necesarias
      setFormData({
        id_apartment: 0,
        title: "",
        price_per_night_pesos: 0,
        price_per_night_dolar: 0,
        season: "media",
      });
    } catch (error: any) {
      console.error("Error al crear el precio:", error);
    
      // Verifica si el error tiene una propiedad de mensaje específica
      if (error.response && error.response.data && error.response.data.error) {
        // Muestra un mensaje de error específico
        Swal.fire({
          title: "Error al crear el precio",
          text: error.response.data.error,
          icon: "error",
          timer: 4000,
          showConfirmButton: false,
        });
      } else {
        // Si el error no tiene un mensaje específico, muestra un mensaje genérico
        Swal.fire({
          title: "Error al crear el precio",
          text: "Hubo un error al intentar crear el precio. Por favor, inténtalo nuevamente.",
          icon: "error",
          timer: 4000,
          showConfirmButton: false,
        });
      }
    }
  }

  return (
    <div className="w-1/2 p-4 font-Poppins ">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
        Crear Precio
      </h1>
      <form onSubmit={handlePostPrice}>
        <div>
          <label>Departamento:</label>
          <select
            name="title"
            value={formData.id_apartment.toString()}
            onChange={handleChange}
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

        <div>
          <label>Precio en Pesos:</label>
          <input
            type="text"
            name="price_per_night_pesos"
            value={formData.price_per_night_pesos}
            onChange={handleChange}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label>Precio en Dólares:</label>
          <input
            type="text"
            name="price_per_night_dolar"
            value={formData.price_per_night_dolar}
            onChange={handleChange}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label>Temporada:</label>
          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue hover:bg-lightblue text-white hover:text-midblue py-2 px-4 rounded"
        >
          Cargar
        </button>
      </form>
    </div>
  );
};

export default SetPrices;
