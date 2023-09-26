import { useSelector } from "react-redux";
import { State } from "../../../../../redux/Types";

const FormServices = () => {
    const services = useSelector((state: State) => state.services);

    return (
        <div className="relative mt-4 font-Poppins">
    <h2 className="mb-2 text-sm font-semibold">Servicios</h2>
    <div className="row row-cols-2 g-3">
        {services.map((service) => (
            <div key={service.id} className="col d-flex align-items-center">
                <input
                    type="checkbox"
                    value={service.id.toString()}
                    className="me-2"
                />
                {service.name}
            </div>
        ))}
    </div>
</div>
    );
};

export default FormServices;

