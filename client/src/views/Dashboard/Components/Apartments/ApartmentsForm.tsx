import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getServices } from "../../../../redux/actions/getServices";
import FormImages from "./formImages";
import FormBoolean from "./formboolean";
import FormCantidades from "./formCantidades";
import FormDesciption from "./formDescription";
import FormMany from "./formMany";
import FormServices from "./formServices";
import { State, Services } from "../../../../redux/Types";


function ApartmentsForm() {
  const services = useSelector((state: State) => state.services);
  const dispatch = useDispatch();

  console.log(services);


  // useEffect(() => {
  //   dispatch(getServices());
  // }, [dispatch]);

  

  const [formData, setFormData] = useState({
    ap_number: "",
    title: "",
    floor: "",
    room_number: "",
    bath_number: "",
    bed_number: "",
    sofabed_number: "",
    room_one_bed: "",
    room_two_bed: "",
    room_three_bed: "",
    estar_bed: "",
    property_type: "",
    description: "",
    price_per_night: "",
    images: [],
    rating: "",
    max_guests: "",
    min_nights: "",
    is_active: true,
    weekly_discount: false,
    monthly_discount: false,
    allow_pets: false,
    accessibility: false,
    private_access: false,
    services: [] as string[],
  });

  // const handleServiceSelection = (selectedServices: string[]) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     services: selectedServices
  //   }) as typeof formData); // Asegura que el nuevo estado coincida con el tipo formData
  // };

  // const handleServiceToggle = (serviceName: string) => {
  //   if (formData.services.includes(serviceName)) {
  //     // Si el servicio ya está seleccionado, remuévelo
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       services: prevData.services.filter((service) => service !== serviceName),
  //     }));
  //   } else {
  //     // Si el servicio no está seleccionado, agrégalo
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       services: [...prevData.services, serviceName],
  //     }));
  //   }
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData)
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex w-full  mx-4 sm:mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex h-screen justify-center w-full mx-4 sm:mx-auto ">
            <div className="w-1/2 p-4 font-Poppins ">
              <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
                Crear Departamento
              </h1>
              <input
                type="number"
                name="ap_number"
                placeholder="Número de departamento"
                value={formData.ap_number}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />

              <input
                type="text"
                name="title"
                placeholder="Título"
                value={formData.title}
                onChange={handleInputChange}
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
              />

              <div>
                <FormCantidades
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div >
                <FormDesciption
                  formData={formData}
                  handleInputChangeTextArea={handleInputChangeTextArea}
                />
              </div>

              <div>
                <FormMany
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="bg-blue hover:bg-lightblue text-white hover:text-midblue py-2 px-4 rounded"
              >
                Cargar
              </button>
            </div>

            <div className="w-1/2 p-4 font-Poppins ml-10 ">
              <div className="relative ">
                <h2 className=" px-2 mb-2 text-sm font-semibold">Piso</h2>

                <select
                  name="floor"
                  value={formData.floor.toString()}
                  placeholder="Piso"
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                >
                  <option value="0">PB</option>
                  <option value="1">1</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="room_one_bed"
                  placeholder="Cuarto 1: tipo de cama"
                  value={formData.room_one_bed}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                />

                <input
                  type="text"
                  name="room_two_bed"
                  placeholder="Cuarto 2: tipo de cama"
                  value={formData.room_two_bed}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                />

                <input
                  type="text"
                  name="room_three_bed"
                  placeholder="Cuarto 3: tipo de cama"
                  value={formData.room_three_bed}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                />

                <input
                  type="text"
                  name="estar_bed"
                  placeholder="Estar: tipo de cama"
                  value={formData.estar_bed}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <FormBoolean
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
            <div className="ml-10">
              <FormImages
                formData={formData}
                handleInputChange={handleInputChange}
              />
              <FormServices 
                  
                />
            </div>
            
            <div>
            
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApartmentsForm;
