import { BiEditAlt, BiTrash } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Apartments } from "../../../../redux/interfaces";
import { State } from "../../../../redux/Types";
import Swal from "sweetalert2";
import deleteApartments from "../../../../redux/actions/deleteApartment";
import { AnyAction } from "redux";

const AllApartments = () => {
    const apartments = useSelector((state: State) => state.apartments);
    const [selectedApartment, setSelectedApartment] = useState<Apartments | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars
    const dispatch = useDispatch();

    const openDeleteModal = (apartment: Apartments) => {
             setSelectedApartment(apartment);
             Swal.fire({
               title: "¿Estás seguro/a que querés borrar este Departamento?",
               text: "No podrás recuperarlo una vez que lo borres.",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Sí, borrar",
               cancelButtonText: "Cancelar",
             }).then((result) => {
               if (result.isConfirmed) {
                 // Borrar el departamento seleccionado
                 dispatch(deleteApartments(apartment.id_apartment) as unknown as AnyAction);
                 Swal.fire("¡Departamento borrado!", "Departamento borrado con éxito.", "success");
               }
             });
           };

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
       <strong className="text-gray-700 font-medium">Departamentos</strong>
       <div className="border-x border-gray-200 rounded-sm mt-3">
         <table className="w-full text-gray-700 text-sm uppercase">
           <thead>
             <tr className="text-center">
               <th>ID</th>
               <th>Número</th>
               <th>Nombre</th>
               <th>Precio x Noche</th>
               <th>Minimo de Noches</th>
               <th>Capacidad</th>
               {/* <th>Servicios</th> */}
               <th>Editar</th>
               <th>Eliminar</th>
             </tr>
           </thead>
           <tbody>
             {apartments.map((apartment) => (
              <tr key={apartment.id_apartment} className="text-center hover:bg-lightblue">
                <td>{apartment.id_apartment}</td>
                <td>{apartment.ap_number}</td>
                <td>{apartment.title}</td>
                <td>{apartment.price_per_night}</td>
                <td>{apartment.min_nights}</td>
                <td >{apartment.max_guests}</td>
                {/* <td>
                  {apartment.services.map((service) => (
                    <span key={service.id_service}>{service.name}</span>
                  ))}
                </td> */}
                <td className="text-center icon-cell">
                    <button
                    className="text-white bg-midblue hover:bg-blue px-1 py-1 rounded ml-4"
                    >
                        <BiEditAlt className="text-xl"  />
                    </button>
                  
                </td>
                <td className="text-center icon-cell">
                <button
                  className="text-white bg-red-500 hover:bg-red-600 px-1 py-1 rounded ml-4"
                  onClick={() => openDeleteModal(apartment)}
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
    );
    };
    export default AllApartments;


// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import getApartments from "../../../../redux/actions/getApartments";
// import { State } from "../../../../redux/Types";
// import { Apartments } from "../../../../redux/interfaces";
// import { BiEditAlt, BiTrash } from "react-icons/bi";
// import Swal from "sweetalert2";
// import deleteApartments from "../../../../redux/actions/deleteApartment";
// import { AnyAction } from "redux";

// const AllApartments = () => {
//   const apartments = useSelector((state: State) => state.apartments); 
//   const [selectedApartment, setSelectedApartment] = useState<Apartments | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       const action = getApartments();
//       if (typeof action === "function") {
//         await action(dispatch);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   const openDeleteModal = (apartment: Apartments) => {
//     setSelectedApartment(apartment);
//     Swal.fire({
//       title: "¿Estás seguro/a que querés borrar este Departamento?",
//       text: "No podrás recuperarlo una vez que lo borres.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Sí, borrar",
//       cancelButtonText: "Cancelar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Borrar el departamento seleccionado
//         dispatch(deleteApartments(apartment.id_apartment) as unknown as AnyAction);
//         Swal.fire("¡Departamento borrado!", "Departamento borrado con éxito.", "success");
//       }
//     });
//   };


//   return (
//     <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//       <strong className="text-gray-700 font-medium">Departamentos</strong>
//       <div className="border-x border-gray-200 rounded-sm mt-3">
//         <table className="w-full text-gray-700 text-sm uppercase">
//           <thead>
//             <tr className="text-center">
//               <th>ID</th>
//               <th>Número</th>
//               <th>Nombre</th>
//               <th>Precio x Noche</th>
//               <th>Minimo de Noches</th>
//               <th>Capacidad</th>
//               {/* <th>Servicios</th> */}
//               <th>Editar</th>
//               <th>Eliminar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apartments.map((apartment) => (
//               <tr key={apartment.id_apartment} className="text-center hover:bg-lightblue">
//                 <td>{apartment.id_apartment}</td>
//                 <td>{apartment.ap_number}</td>
//                 <td>{apartment.title}</td>
//                 <td>{apartment.price_per_night}</td>
//                 <td>{apartment.min_nights}</td>
//                 <td >{apartment.max_guests}</td>
//                 {/* <td>
//                   {apartment.services.map((service) => (
//                     <span key={service.id_service}>{service.name}</span>
//                   ))}
//                 </td> */}
//                 <td className="text-center icon-cell">
//                     <button
//                     className="text-white bg-midblue hover:bg-blue px-1 py-1 rounded ml-4"
//                     >
//                         <BiEditAlt className="text-xl"  />
//                     </button>
                  
//                 </td>
//                 <td className="text-center icon-cell">
//                 <button
//                   className="text-white bg-red-500 hover:bg-red-600 px-1 py-1 rounded ml-4"
//                   onClick={() => openDeleteModal(apartment)}
//                 >
//                   <BiTrash className="text-xl" />
//                 </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllApartments;
