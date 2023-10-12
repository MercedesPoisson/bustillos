import { useSelector } from "react-redux";
import { State } from "../../../../redux/Types";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const Prices = () => {
  const prices = useSelector((state: State) => state.price);
  console.log(prices);

  const uniqueDepartments = Array.from(
    new Set(prices.map((price) => price.title))
  );

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
                  <th>Season</th>
                  <th>Price (Pesos)</th>
                  <th>Price (Dólar)</th>
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
                          //   onClick={() => openDeleteModal(apartment)}
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

export default Prices;
