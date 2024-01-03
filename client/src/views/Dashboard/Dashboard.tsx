const Dashboard = () => {
    return(
        <div>
            Bienvenidos a Bustillos 7500.
            Aca se visualiza un resumen de las distintas secciones
        </div>
    )
}
export default Dashboard;


// import TimeLine from "react-gantt-timeline";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";


// const config = {
//   header: {
//     top: {
//       style: {
//         backgroundColor: "#95aacd",
//         color: "white",
//         fontSize: 12
//       }
//     },
//     middle: {
//       style: {
//         backgroundColor: "lightgrey",
//         fontSize: 9
//       }
//     },
//     bottom: {
//       style: {
//         background: "white",
//         fontSize: 9,
//         color: "grey"
//       },
//       selectedStyle: {
//         background: "linear-gradient( #d011dd ,#d011dd)",
//         fontWeight: "bold",
//         color: "white"
//       }
//     }
//   },
//   taskList: {
//     title: {
//       label: "Departamento",
//       style: {
//         backgroundColor: "#5b7bb2",
//         color: "White"
//       }
//     },
//     task: {
//       style: {
//         backgroundColor: "",
//         color: "black"
//       }
//     },
//     verticalSeparator: {
//       style: {
//         backgroundColor: "#fbf9f9"
//       },
//       grip: {
//         style: {
//           backgroundColor: "#5b7bb2"
//         }
//       }
//     }
//   },
//   dataViewPort: {
//     rows: {
//       style: {
//         backgroundColor: "white",
//         borderBottom: "solid 0.1px lightgrey"
//       }
//     },
//     task: {
//       showLabel: true,
//       style: {
//         backgroundColor: "#EC7FD1"
//       }
//     }
//   }
// };

// const RentTimeline = () => {
//     const rents = useSelector((state: any) => state.rents);
  
//     useEffect(() => {
//       // Si es necesario realizar alguna lógica específica cuando cambian las reservas
//       // Puedes hacerlo aquí
//     }, [rents]);
  
//     const timelineData = rents.map((rent: any) => ({
//       id: rent.booking_number, 
//       start: new Date(rent.start_date),
//       end: new Date(rent.end_date),
//       name: rent.Apartment.title,
//       color: '#EC7FD1', 
//     }));
  
//     return (
//       <div className="app-container">
//         <div className="time-line-container">
//           <TimeLine data={timelineData} config={config} />
//         </div>
//       </div>
//     );
//   };
  
//   export default RentTimeline;


// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import moment from 'moment';

// const TimelineComponent = () => {
//   const rents = useSelector((state: any) => state.rents);
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     // Actualiza las reservas cuando cambia el estado de Redux
//     setReservations(rents);
//   }, [rents]);

//   const calculateDuration = (start: any, end: any) => {
//     const startDate = moment(start);
//     const endDate = moment(end);
//     return endDate.diff(startDate, 'days');  // Puedes ajustar la unidad según tus necesidades
//   };

//   return (
//     <div className="w-full border p-4">
//       <div className="flex">
//         {/* Puedes utilizar las clases de Tailwind aquí para el encabezado */}
//       </div>
//       <div className="flex flex-col">
//         {/* Renderizar reservas */}
//         {rents.map((rent: any) => (
//           <div key={rent.id} className="flex border-b p-2">
//             {/* Utiliza las clases de Tailwind para personalizar cada reserva */}
//             <div>{rent.booking_number}</div>
//             <div>{rent.Apartment.title}</div>
//             <div>{rent.start_date}</div>
//             <div>{rent.end_date}</div>
//             {/* Agrega más detalles según sea necesario */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimelineComponent;


  
  
  


