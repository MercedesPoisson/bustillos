import { useSelector } from "react-redux";
import { State } from "../../../../redux/Types";

const FormServices = () => {
    const services = useSelector((state: State) => state.services);

    return (
        <div className="relative mt-4 font-Poppins">
            <h2 className="mb-2 text-sm font-semibold">Servicios</h2>
            <div className="grid grid-cols-3 gap-4">
                {services.map((service) => (
                    <label key={service.id} className="flex items-center">
                        <input
                            type="checkbox"
                            value={service.id.toString()}
                        />
                        {service.name}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FormServices;


// import React, { useEffect, useState } from "react";

// interface FormServicesProps {
//     services: Service[]; // Utilizamos el tipo Service[]
//     selectedServices: string[];
//     onSelect: (selectedServices: string[]) => void;
//     onToggle: (serviceId: string) => void;
// }

// const FormServices: React.FC<FormServicesProps> = ({ services, selectedServices, onSelect, onToggle }) => {
//     return (
//         <div>
//             <h2>Select Services</h2>
//             {services.map((service) => (
//                 <label key={service.id}>
//                     <input
//                         type="checkbox"
//                         value={service.id.toString()}
//                         checked={selectedServices.includes(service.id.toString())}
//                         onChange={() => onToggle(service.id.toString())}
//                     />
//                     {service.name}
//                 </label>
//             ))}
//         </div>
//     );
// };

// export default FormServices;