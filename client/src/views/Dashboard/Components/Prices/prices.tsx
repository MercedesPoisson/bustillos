import { useSelector, useDispatch } from "react-redux";
import { State } from "../../../../redux/Types";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import deletePrice from "../../../../redux/actions/deletePrice";
import { useState } from "react";
import { Prices } from "../../../../redux/interfaces";
import Swal from "sweetalert2";

const AllPrices = () => {
  const prices = useSelector((state: State) => state.price);
  console.log(prices);

  const uniqueDepartments = Array.from(
    new Set(prices.map((price) => price.title))
  );

  const [selectedPrice, setSelectedPrice] = useState<Prices | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const openDeleteModal = (price: Prices) => {
    setSelectedPrice(price);
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás recuperar este precio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePrice(price.id_price) as unknown as any);
        Swal.fire("¡Precio borrado!", "Precio borrado con éxito.", "success");
      }
    });
  };
  

  return (
    <div className="w-1/2 p-4 font-Poppins ">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
        Precios Por Departamento
      </h1>
      {uniqueDepartments.map((departmentTitle) => (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 mb-2">
          <div
            key={departmentTitle}
            className="border-x border-gray-200 rounded-sm mt-3"
          >
            <h2>{departmentTitle}</h2>
            <table className="w-full text-gray-700 text-sm uppercase">
              <thead>
                <tr className="text-center">
                  <th>Temporada</th>
                  <th>Precio (Pesos)</th>
                  <th>Precio (Dólar)</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {prices
                  .filter((price) => price.title === departmentTitle)
                  .map((price) => (
                    <tr
                      key={price.id_price}
                      className="text-center hover:bg-lightblue"
                    >
                      <td>{price.season}</td>
                      <td>{price.price_per_night_pesos}</td>
                      <td>{price.price_per_night_dolar}</td>
                      <td className="text-center icon-cell">
                        <button className="text-white bg-midblue hover:bg-blue px-1 py-1 rounded ml-4">
                          <BiEditAlt className="text-xl" />
                        </button>
                      </td>
                      <td className="text-center icon-cell">
                        <button
                          className="text-white bg-red-500 hover:bg-red-600 px-1 py-1 rounded ml-4"
                            onClick={() => openDeleteModal(price)}
                        >
                          <BiTrash className="text-xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPrices;
