// interface FormData {
//     pax_name: string;
//     pax_surname: string;
//     pax_dni: string;
//     // Otras propiedades si las hay
//   }

// interface FormPersonalDataProps {
//     formData: FormData; 
//     setFormData: (updatedData: FormData) => void;
//     index: number;
//   }

//   const PersonalData: React.FC<FormPersonalDataProps> = ({ formData, setFormData }) => {
//     return (
//       <div>
//         <div>
//           <label>Nombre</label>
//           <input
//             type="text"
//             name="pax_name"
//             value={formData.pax_name}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 pax_name: e.target.value,
//               }))
//             }
//             className="block w-80 mb-2 p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label>Apellido</label>
//           <input
//             type="text"
//             name="pax_surname"
//             value={formData.pax_surname}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 pax_surname: e.target.value,
//                 pax_dni: prevData.pax_dni, // Asegura que pax_dni se mantenga igual
//               }))
//             }
//             className="block w-80 mb-2 p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label>DNI</label>
//           <input
//             type="text"
//             name="pax_dni"
//             value={formData.pax_dni}
//             onChange={(e) =>
//               setFormData((prevData) => ({
//                 ...prevData,
//                 pax_dni: e.target.value,
//               }))
//             }
//             className="block w-80 mb-2 p-2 border border-gray-300 rounded"
//           />
//         </div>
//       </div>
//     );
//   };

// export default PersonalData;



import { GuestFormData } from "../../../../../redux/Types"

interface FormPersonalDataProps {
  guests: {
        pax_name: string
        pax_surname: string
        pax_dni: string
    }
    setFormData: React.Dispatch<React.SetStateAction<GuestFormData>>;
}

const FormPersonalData: React.FC<FormPersonalDataProps> = ({
  guests,
    setFormData,
  }) => {
    return (
      <div>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="pax_name"
            value={guests.pax_name}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                pax_name: e.target.value,
              }))
            }
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="pax_surname"
            value={guests.pax_surname}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                pax_surname: e.target.value,
              }))
            }
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label>DNI</label>
          <input
            type="text"
            name="pax_dni"
            value={guests.pax_dni}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                pax_dni: e.target.value,
              }))
            }
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    );
  };

export default FormPersonalData;