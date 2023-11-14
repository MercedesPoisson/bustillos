import TimeLine from "react-gantt-timeline";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface Reservation {
    Apartment: {
      id: number;
      title: string;
    };
    booking_number: string;
    start_date: string;
    end_date: string;
  }

const config = {
  header: {
    top: {
      style: {
        backgroundColor: "#95aacd",
        color: "white",
        fontSize: 12
      }
    },
    middle: {
      style: {
        backgroundColor: "lightgrey",
        fontSize: 9
      }
    },
    bottom: {
      style: {
        background: "white",
        fontSize: 9,
        color: "grey"
      },
      selectedStyle: {
        background: "linear-gradient( #d011dd ,#d011dd)",
        fontWeight: "bold",
        color: "white"
      }
    }
  },
  taskList: {
    title: {
      label: "Departamentos",
      style: {
        backgroundColor: "#5b7bb2",
        color: "White"
      }
    },
    task: {
      style: {
        backgroundColor: "",
        color: "black"
      }
    },
    verticalSeparator: {
      style: {
        backgroundColor: "#fbf9f9"
      },
      grip: {
        style: {
          backgroundColor: "#5b7bb2"
        }
      }
    }
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: "white",
        borderBottom: "solid 0.1px lightgrey"
      }
    },
    task: {
      showLabel: true,
      style: {
        cursor: 'pointer',
      }
    }
  }
};

const RentTimeline = () => {
    const rents = useSelector((state: any) => state.rents);
  
    useEffect(() => {
      // Lógica adicional si es necesario al cambiar las reservas
    }, [rents]);
  
    const groupReservationsByApartment = (): Record<number, Reservation[]> => {
      const groupedReservations: Record<number, Reservation[]> = {};
  
      rents.forEach((rent: Reservation) => {
        const apartmentId = rent.Apartment.id;
  
        if (!groupedReservations[apartmentId]) {
          groupedReservations[apartmentId] = [];
        }
  
        groupedReservations[apartmentId].push(rent);
      });
  
      return groupedReservations;
    };
  
    const timelineData = Object.values(groupReservationsByApartment()).flatMap((group, rowIndex) => {
      // Calcular fechas mínimas y máximas para cada grupo
      const startDate = new Date(Math.min(...group.map((rent) => new Date(rent.start_date).getTime())));
      const endDate = new Date(Math.max(...group.map((rent) => new Date(rent.end_date).getTime())));
  
      // Crear entradas de la línea de tiempo para cada reserva en el grupo
      const reservationsInRow = group.map((rent, columnIndex) => ({
        id: `${rent.Apartment.id}_${columnIndex + 1}`,
        start: new Date(rent.start_date),
        end: new Date(rent.end_date),
        name: rent.Apartment.title, // Cambiado a mostrar el título del departamento
        color: '#EC7FD1',
        tooltipContent: rent.booking_number, // Añadido para mostrar el número de reserva en el tooltip
      }));
  
      return reservationsInRow;
    });
  
    const handleTaskClick = (task: any) => {
      console.log(`Reserva seleccionada: ${task.tooltipContent}`);
    };
  
    return (
      <div className="app-container">
        <div className="time-line-container">
          <TimeLine data={timelineData} config={config} onItemClick={handleTaskClick} />
        </div>
      </div>
    );
  };
  
  export default RentTimeline;
  
  
  


// const Dashboard = () => {
//     return(
//         <div>
//             aca es donde renderizo todas las pantallas, es el index
//         </div>
//     )
// }
// export default Dashboard;