import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AllRents = () => {
  const rents = useSelector((state: any) => state.rents);
  console.log("reservas", rents);
  

  useEffect(() => {
    google.charts.load('current', { packages: ['timeline'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const container = document.getElementById('timeline');
      
      if (container) { // Verifica si el elemento existe
        const chart = new google.visualization.Timeline(container);
        const dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Reserva' });
        dataTable.addColumn({ type: 'string', id: 'Apartamento' });
        dataTable.addColumn({ type: 'date', id: 'Inicio' });
        dataTable.addColumn({ type: 'date', id: 'Fin' });


        const reservations = rents.map((rent: any) => [
          rent.Apartment.title,
          rent.booking_number,
          new Date(rent.start_date),
          new Date(rent.end_date),
        ])

        dataTable.addRows(reservations);

        const options = {
          colors: ["#EC7FD1", "#4E6793", "#C4D7F9"],
          timeline: {
            
            colorByRowLabel: true,
          }
        }

        chart.draw(dataTable, options);
      }
    }
  }, [rents]);

  return (
    <div>
      <h1>Reservas</h1>
      <div id="timeline" style={{ height: '300px' }}></div>
    </div>
  );
};

export default AllRents;







// const AllRents = () => {
//     return(
//         <div>
//             layout AllRents
//         </div>
//     )
// }
// export default AllRents;