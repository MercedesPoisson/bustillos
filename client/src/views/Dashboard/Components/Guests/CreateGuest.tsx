import { useState } from "react";
import { useSelector } from "react-redux";
// import postGuests from "../../../../redux/actions/postGuest";
import { State } from "../../../../redux/Types";
import FormPersonalData from "./Create/PersonalData";
import axios from "axios";
import { Guests } from "../../../../redux/Types";

const CreateGuest = () => {
  const rents = useSelector((state: State) => state.rents);

  const [guests, setGuests] = useState([
    { pax_name: '', pax_surname: '', pax_dni: '', id_rent: 0 },
  ]);

  const [selectedBookingNumber, setSelectedBookingNumber] = useState<string | null>(null);

  const [idRent, setIdRent] = useState<number>(0);

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleAddAccompanist = () => {
    if (guests.length < 7) {
      setGuests((prevData) => [
        ...prevData,
        { pax_name: "", pax_surname: "", pax_dni: "", id_rent: 0 },
      ]);
    }
  };

  const postGuests = async (guestData: Guests[]) => {
      try {
        console.log("Preparing to post...", guestData);
        const response = await axios.post(`http://localhost:3001/guests/`, guestData
          );
        console.log("Datos enviados a la base de datos, formData", response.data );
        
      } catch (error) {
        // Maneja el error aquí
        console.error("Error posting guests:", error);
      }
  };


  const handlePostGuest = async (event: any) => {
    event.preventDefault();

    guests.forEach((guest) => {
      guest.id_rent = idRent;
    });
      console.log("formData", guests);

    const response = await postGuests(guests);
    return response;
    }



  return (
    <div className="w-1/2 p-4 font-Poppins">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
        Agregar Acompañantes
      </h1>
      <form onSubmit={handlePostGuest}>
        <div>
          <label>Número de Reserva</label>
          <select
            name="id_rent"
            value={selectedBookingNumber || ""}
            onChange={(e) => {
                const selectedValue = e.target.value;
                setSelectedBookingNumber(selectedValue);
                // Convierte selectedValue en un número antes de asignarlo a idRent
                setIdRent(parseInt(selectedValue, 10));
              }}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          >
            <option value="">Seleccionar</option>
            {rents.map((rent) => (
              <option key={rent.id_rent} value={rent.id_rent.toString()}>
                {rent.booking_number} - {rent.name} {rent.surname}
              </option>
            ))}
          </select>
        </div>
        <ul className="flex text-base text-blue font-semibold font-Poppins cursor-pointer">
          {guests.map((_, index) => (
            <li
              className={`mr-4 p-2 ${
                activeTab === index
                  ? "active bg-blue text-lightblue border rounded-lg"
                  : "hover:text-lightblue"
              }`}
              onClick={() => handleTabChange(index)}
            >
              Pasajero {index + 1}
            </li>
          ))}
          <li className="p-2" onClick={handleAddAccompanist}>
            Agregar Acompañante
          </li>
        </ul>
        {guests.map((data, index) => (
          <div key={index}>
            {activeTab === index && (
              <FormPersonalData
              key={index}
            //   index={index}
                guests={data}
                setFormData={(updatedData) => {
                  setGuests((prevData) => {
                    const newFormData = [...prevData];
                    newFormData[index] =
                      typeof updatedData === "function"
                        ? updatedData(prevData[index])
                        : updatedData;
                    return newFormData;
                  });
                }}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue hover-bg-lightblue text-white hover-text-midblue py-2 px-4 rounded"
        >
          Cargar
        </button>
      </form>
    </div>
  );
};

export default CreateGuest;
















// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import postGuests from "../../../../redux/actions/postGuest";
// import { State } from "../../../../redux/Types";
// import FormPersonalData from "./Create/PersonalData";

// interface GuestFormData {
//   pax_name: string;
//   pax_surname: string;
//   pax_dni: string;
//   id_rent: number;
// }

// const CreateGuest = () => {
//   const dispatch = useDispatch();
//   const rents = useSelector((state: State) => state.rents);

//   const [formData, setFormData] = useState<GuestFormData[]>([
//     { pax_name: "", pax_surname: "", pax_dni: "", id_rent: 0 },
//   ]);

//   const [selectedBookingNumber, setSelectedBookingNumber] = useState<
//     string | null
//   >(null);

//   const [idRent, setIdRent] = useState<number | null>(null);

//   const [activeTab, setActiveTab] = useState<number | null>(null);

//   const handleTabChange = (index: number) => {
//     setActiveTab(index);
//   };

//   const handleAddAccompanist = () => {
//     if (formData.length < 7) {
//       setFormData((prevData) => [
//         ...prevData,
//         { pax_name: "", pax_surname: "", pax_dni: "", id_rent: 0 },
//       ]);
//     }
//   };

//   const handlePostGuest = async (event: any) => {
//     event.preventDefault();
//     const formDataToSend = new FormData();

//     if (idRent !== null) {
//       formData.forEach((guest, index) => {
//         formDataToSend.append(`guests[${index}][pax_name]`, guest.pax_name);
//         formDataToSend.append(`guests[${index}][pax_surname]`, guest.pax_surname);
//         formDataToSend.append(`guests[${index}][pax_dni]`, guest.pax_dni);
//         formDataToSend.append(`guests[${index}][id_rent]`, idRent.toString());
//       });

//       await postGuests(formDataToSend, idRent)(dispatch);
//       console.log("idRent:", idRent);
//       console.log("pax_name:", formData[0].pax_name);
//       console.log("pax_name:", formData[1].pax_name);
//       console.log("pax_surname:", formData[0].pax_surname);
//       console.log("pax_surname:", formData[1].pax_surname);
//       console.log("como salen los acompañantes:", formDataToSend);

//       const formDataToSendEntries = formDataToSend.entries();

//       for (const [name, value] of formDataToSendEntries) {
//         console.log(`${name}: ${value}`);
// }
//     }
//   };

//   return (
//     <div className="w-1/2 p-4 font-Poppins">
//       <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
//         Agregar Acompañantes
//       </h1>
//       <form onSubmit={handlePostGuest}>
//         <div>
//           <label>Número de Reserva</label>
//           <select
//             name="id_rent"
//             value={selectedBookingNumber || ""}
//             onChange={(e) => {
//               const selectedValue = e.target.value;
//               setSelectedBookingNumber(selectedValue);
//               // También establece el valor de idRent aquí
//               setIdRent(parseInt(selectedValue, 10));
//             }}
//             className="block w-80 mb-2 p-2 border border-gray-300 rounded"
//           >
//             <option value="">Seleccionar</option>
//             {rents.map((rent) => (
//               <option key={rent.id_rent} value={rent.id_rent.toString()}>
//                 {rent.booking_number} - {rent.name} {rent.surname}
//               </option>
//             ))}
//           </select>
//         </div>
//         <ul className="flex text-base text-blue font-semibold font-Poppins cursor-pointer">
//           {formData.map((_, index) => (
//             <li
//               className={`mr-4 p-2 ${
//                 activeTab === index
//                   ? "active bg-blue text-lightblue border rounded-lg"
//                   : "hover:text-lightblue"
//               }`}
//               onClick={() => handleTabChange(index)}
//             >
//               Pasajero {index + 1}
//             </li>
//           ))}
//           <li className="p-2" onClick={handleAddAccompanist}>
//             Agregar Acompañante
//           </li>
//         </ul>
//         {formData.map((data, index) => (
//           <div key={index}>
//             {activeTab === index && (
//               <FormPersonalData
//                 formData={data}
//                 setFormData={(updatedData) => {
//                   setFormData((prevData) => {
//                     const newFormData = [...prevData];
//                     newFormData[index] =
//                       typeof updatedData === "function"
//                         ? updatedData(prevData[index])
//                         : updatedData;
//                     return newFormData;
//                   });
//                 }}
//               />
//             )}
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="bg-blue hover-bg-lightblue text-white hover-text-midblue py-2 px-4 rounded"
//         >
//           Cargar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateGuest;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import postGuests from "../../../../redux/actions/postGuest";
// import { State } from "../../../../redux/Types";
// import FormPersonalData from "./Create/PersonalData";

// interface GuestFormData {
//   pax_name: string;
//   pax_surname: string;
//   pax_dni: string;
//   id_rent: number;
// }

// const GuestForm = () => {
//   const dispatch = useDispatch();
//   const rents = useSelector((state: State) => state.rents);
//   console.log("Datos de reservas recibidos:", rents);

//   const [formData, setFormData] = useState<GuestFormData>({
//     pax_name: "",
//     pax_surname: "",
//     pax_dni: "",
//     id_rent: 0,
//   });
//   const [selectedBookingNumber, setSelectedBookingNumber] = useState<
//     string | null
//   >(null);

//   const [activeTab, setActiveTab] = useState("whoRents");

//   const handleTabChange = (tabName: any) => {
//     setActiveTab(tabName);
//   };

//   const handlePostGuest = async () => {
//     const newForm = new FormData();
//     newForm.append("pax_name", formData.pax_name);
//     newForm.append("pax_surname", formData.pax_surname);
//     newForm.append("pax_dni", formData.pax_dni);
//     newForm.append("id_rent", selectedBookingNumber || "");
//     await postGuests(newForm)(dispatch);
//     console.log("Guest posted", newForm);
//   };

//   return (
//     <div className="w-1/2 p-4 font-Poppins ">
//       <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
//         Agregar Acompañantes
//       </h1>
//       <form onSubmit={handlePostGuest}>
//         <div>
//           <label>Número de Reserva</label>
//           <select
//             name="id_rent"
//             onChange={(e) => {
//               const selectedValue = e.target.value;
//               setSelectedBookingNumber(selectedValue);
//               setFormData({ ...formData, id_rent: parseInt(selectedValue) });
//             }}
//             className="block w-80 mb-2 p-2 border border-gray-300 rounded"
//           >
//             <option value="">Seleccionar</option>
//             {rents.map((rent) => (
//               <option key={rent.id_rent} value={rent.id_rent.toString()}>
//                 {rent.booking_number} - {rent.name} {rent.surname}
//               </option>
//             ))}
//           </select>
//         </div>
//         <ul className="flex text-base text-blue font-semibold font-Poppins cursor-pointer">

//         <li
//             className={`mr-4 p-2 ${
//               activeTab === "pasajero1"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 1
//           </li>
//           <li
//             className={`mr-4 p-2 ${
//               activeTab === "pasajero2"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 2
//           </li>
//           <li
//             className={`mr-4 p-2 ${
//               activeTab === "FormPersonalData"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 3
//           </li>
//           <li
//             className={`mr-4 p-2 ${
//               activeTab === "FormPersonalData"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 4
//           </li>
//           <li
//             className={`mr-4 p-2 ${
//               activeTab === "FormPersonalData"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 5
//           </li>
//           <li
//             className={`mr-4 p-2 ${
//               activeTab === "FormPersonalData"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 6
//           </li>
//           <li
//             className={`mr-4 p-2 ${
//               activeTab === "FormPersonalData"
//                 ? "active bg-blue text-lightblue border rounded-lg"
//                 : "hover:text-lightblue"
//             }`}
//             onClick={() => handleTabChange("FormPersonalData")}
//           >
//             Pasajero 7
//           </li>
//         </ul>
//         {activeTab === "pasajero1" && (
//           <FormPersonalData
//             formData={formData}
//             setFormData={setFormData}
//           />
//         )}

// {activeTab === "pasajero2" && (
//           <FormPersonalData
//             formData={formData}
//             setFormData={setFormData}
//           />
//         )}
// <button
//           type="submit"
//           className="bg-blue hover:bg-lightblue text-white hover:text-midblue py-2 px-4 rounded"
//         >
//           Cargar
//         </button>

//         {/* <div>
//           <FormPersonalData formData={formData} setFormData={setFormData} />
//         </div> */}
//       </form>
//     </div>
//   );
// };

// export default GuestForm;
