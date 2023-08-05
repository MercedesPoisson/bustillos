import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormImages from "./formImages";
import FormBoolean from "./formboolean";
import FormCantidades from "./formCantidades";
import FormDesciption from "./formDescription";
import FormMany from "./formMany";
import FormServices from "./formServices";
import { State } from "../../../../redux/Types";
import { Dispatch } from "redux";
import postApartment from "../../../../redux/actions/postApartment";

interface ApartmentFormData {  
  ap_number: number | any;
  title: string | any;
  floor: number | any;
  room_number: number | any;
  bath_number: number | any;
  bed_number: number | any;
  sofabed_number: number | any;
  room_one_bed: string | any;
  room_two_bed: string | any;
  room_three_bed:string | any;
  estar_bed: string | any;
  property_type: string | any;
  description: string | any;
  price_per_night: number | any;
  images: string[] | any;
  is_active: boolean | any;
  max_guests: number | any;
  min_nights:number | any;
  weekly_discount: boolean | any;
  monthly_discount: boolean | any;
  allow_pets: boolean | any;
  accessibility: boolean | any;
  private_access: boolean | any;
  services: string[] | any;
}

function ApartmentsForm() {
  const services = useSelector((state: State) => state.services);
  console.log(services);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<ApartmentFormData>({
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

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

  const handlePost = async() => {
    console.log("Handling post...");
    const newForm = new FormData();
    newForm.append("ap_number", formData.ap_number);
    newForm.append("title", formData.title);
    newForm.append("floor", formData.floor);
    newForm.append("room_number", formData.room_number);
    newForm.append("bath_number", formData.bath_number);
    newForm.append("bed_number", formData.bed_number);
    newForm.append("sofabed_number", formData.sofabed_number);
    newForm.append("room_one_bed", formData.room_one_bed);
    newForm.append("room_two_bed", formData.room_two_bed);
    newForm.append("room_three_bed", formData.room_three_bed);
    newForm.append("estar_bed", formData.estar_bed);
    newForm.append("property_type", formData.property_type);
    newForm.append("description", formData.description);
    newForm.append("price_per_night", formData.price_per_night);

    formData.images.forEach((image: any, index: any) => {
      newForm.append(`image-${index}`, image);
    });
    newForm.append("is_active", formData.is_active.toString());
    newForm.append("max_guests", formData.max_guests);
    newForm.append("min_nights", formData.min_nights);
    newForm.append("weekly_discount", formData.weekly_discount.toString());
    newForm.append("monthly_discount", formData.monthly_discount.toString());
    newForm.append("allow_pets", formData.allow_pets.toString());
    newForm.append("accessibility", formData.accessibility.toString());
    newForm.append("private_access", formData.private_access.toString());
    formData.services.forEach((service: any) => {
      newForm.append("services", service);
    });

    const postApartmentAction = postApartment(newForm);
    await postApartmentAction(dispatch);
    console.log("Datos enviados a la base de datos, formData");
  };

  return (
    <div>
      <div className="flex w-full  mx-4 sm:mx-auto">
        <form onSubmit={handlePost}>
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

              <div>
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
              <FormServices />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApartmentsForm;
