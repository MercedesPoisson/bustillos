import WhoRentsForm from "./CreateRent/WhoRentForm";
import ManyRentForm from "./CreateRent/ManyRentForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import WhereRentForm from "./CreateRent/WhereRentForm";
import postRent from "../../../../redux/actions/postRent";
import WhenRentForm from "./CreateRent/WhenRentForm";
import SourceRentForm from "./CreateRent/SourceRentForm";
import PriceRentForm from "./CreateRent/PriceRentForm";
import SpecialRentForm from "./CreateRent/SpecialRentForm";

interface RentsFormData {
  name: string;
  surname: string;
  phone: string;
  mail: string;
  cuit_dni: string;
  id_apartment: number;
  dateRange: {
    start_date: Date | null;
    end_date: Date | null;
  };
  nights_number: number;
  guests_number: number;
  adults_number: number;
  kids_number: number;
  babies_number: number;
  pets: boolean;
  currency: string;
  total_amount: number;
  deposit: boolean;
  exchange_rate: number;
  deposit_amount: number;
  balance_exchange_rate: number;
  balance: number;
  pre_viaje: boolean;
  payment_status: string;
  payment_date: Date;
  review_status: boolean;
  creation_date: Date;
  is_active: boolean;
  source: string;
  // bed_type
  room_one: string;
  room_two: string;
  room_three: string;
  room_estar: string;
  car: boolean;
  car_plate: string;
}

const RentsForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<RentsFormData>({
    name: "",
    surname: "",
    phone: "",
    mail: "",
    cuit_dni: "",
    id_apartment: 0,
    dateRange: {
      start_date: new Date(),
      end_date: new Date(),
    },

    nights_number: 0,
    guests_number: 0,
    adults_number: 0,
    kids_number: 0,
    babies_number: 0,
    pets: false,
    currency: "",
    total_amount: 0,
    deposit: false,
    exchange_rate: 0,
    deposit_amount: 0,
    balance_exchange_rate: 0,
    balance: 0,
    pre_viaje: false,
    payment_status: "",
    payment_date: new Date(),
    review_status: false,
    creation_date: new Date(),
    is_active: false,
    source: "",
    // bed_type
    room_one: "",
    room_two: "",
    room_three: "",
    room_estar: "",
    car: false,
    car_plate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: checked,
      };
    });
  };

  const handleDatePickerChange = (name: string, date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      dateRange: {
        ...prevData.dateRange,
        [name]: date,
      },
    }));
  };

  const [activeTab, setActiveTab] = useState("whoRents");

  const handleTabChange = (tabName: any) => {
    setActiveTab(tabName);
  };

  const handlePostRent = async (event: any) => {
    event?.preventDefault();
    console.log("Form Data antes de enviar:", formData);
    const newForm = new FormData();
    newForm.append("name", formData.name);
    newForm.append("surname", formData.surname);
    newForm.append("phone", formData.phone);
    newForm.append("mail", formData.mail);
    newForm.append("cuit_dni", formData.cuit_dni);
    newForm.append("id_apartment", formData.id_apartment.toString());
    newForm.append(
      "start_date",
      formData.dateRange.start_date?.toString() || ""
    );
    newForm.append("end_date", formData.dateRange.end_date?.toString() || "");
    newForm.append("nights_number", formData.nights_number.toString());
    newForm.append("guests_number", formData.guests_number.toString());
    newForm.append("adults_number", formData.adults_number.toString());
    newForm.append("kids_number", formData.kids_number.toString());
    newForm.append("babies_number", formData.babies_number.toString());
    newForm.append("pets", formData.pets.toString());
    newForm.append("currency", formData.currency);
    newForm.append("total_amount", formData.total_amount.toString());
    newForm.append("deposit", formData.deposit.toString());
    newForm.append("exchange_rate", formData.exchange_rate.toString());
    newForm.append("deposit_amount", formData.deposit_amount.toString());
    newForm.append(
      "balance_exchange_rate",
      formData.balance_exchange_rate.toString()
    );
    newForm.append("balance", formData.balance.toString());
    newForm.append("pre_viaje", formData.pre_viaje.toString());
    newForm.append("payment_status", formData.payment_status.toString());
    newForm.append("payment_date", formData.payment_date.toString());
    newForm.append("review_status", formData.review_status.toString());
    newForm.append("creation_date", formData.creation_date.toString());
    newForm.append("is_active", formData.is_active.toString());
    newForm.append("source", formData.source);
    newForm.append("room_one", formData.room_one);
    newForm.append("room_two", formData.room_two);
    newForm.append("room_three", formData.room_three);
    newForm.append("room_estar", formData.room_estar);
    newForm.append("car", formData.car.toString());
    newForm.append("car_plate", formData.car_plate);
    const postRentAction = postRent(newForm);
    await postRentAction(dispatch);
    // console.log("Datos enviados a la base de datos, formData");
    // console.log("formato de fecha DESDE el form", formData.dateRange.start_date);
    // console.log("formato de fecha HASTA el form", formData.dateRange.end_date);
  };

  return (
    <div>
      <form onSubmit={handlePostRent}>
      <h1 className="text-l text-midblue uppercase font-semibold font-Poppins mb-1">
                Crear reserva
              </h1>
        <ul className="flex text-base text-blue font-semibold font-Poppins cursor-pointer">
          <li
            className={`mr-4 p-2 ${
              activeTab === "whoRents"
                ? "active bg-midblue text-lightblue border rounded-lg"
                : "hover:text-midblue"
            }`}
            onClick={() => handleTabChange("whoRents")}
          >
            QUIEN
          </li>
          <li
            className={`mr-4  p-2 ${
              activeTab === "manyRent"
              ? "active bg-midblue text-lightblue border rounded-lg"
              : "hover:text-midblue"
            }`}
            onClick={() => handleTabChange("manyRent")}
          >
            CUANTOS
          </li>
          <li
            className={`mr-4 p-2 ${
              activeTab === "whereRent"
              ? "active bg-midblue text-lightblue border rounded-lg"
              : "hover:text-midblue"
            }`}
            onClick={() => handleTabChange("whereRent")}
          >
            DONDE
          </li>

          <li
            className={`mr-4 p-2 ${
              activeTab === "whenRent"
              ? "active bg-midblue text-lightblue border rounded-lg"
              : "hover:text-midblue"
            }`}
            onClick={() => handleTabChange("whenRent")}
          >
            CUANDO
          </li>

          <li
            className={`mr-4 p-2 ${
              activeTab === "source"
              ? "active bg-midblue text-lightblue border rounded-lg"
              : "hover:text-midblue"
            }`}
            onClick={() => handleTabChange("source")}
          >
            FUENTE
          </li>

          <li
            className={`mr-4 p-2 ${
                activeTab === "price"
                ? "active bg-midblue text-lightblue border rounded-lg"
                : "hover:text-midblue"
              }`}
            onClick={() => handleTabChange("price")}
          >
            PRECIO
          </li>

          <li
            className={`mr-4 p-2 ${
              activeTab === "armado"
              ? "active bg-midblue text-lightblue border rounded-lg"
              : "hover:text-midblue"
            }`}
            onClick={() => handleTabChange("armado")}
          >
            ARMADO ESPECIAL
          </li>
        </ul>

        {activeTab === "whoRents" && (
          <WhoRentsForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}

        {activeTab === "manyRent" && (
          <ManyRentForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}

        {activeTab === "whereRent" && (
          <WhereRentForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === "whenRent" && (
          <WhenRentForm
            formData={formData}
            handleDatePickerChange={handleDatePickerChange}
          />
        )}

        {activeTab === "source" && (
          <SourceRentForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}

        {activeTab === "price" && (
          <PriceRentForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckBoxChange={handleCheckboxChange}
          />
        )}

        {activeTab === "armado" && (
          <SpecialRentForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {/* 

        <WhoRentsForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        <ManyRentForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        <WhereRentForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <WhenRentForm
          formData={formData}
          handleDatePickerChange={handleDatePickerChange}
        />
        <SourceRentForm
          formData={formData}
          handleInputChange={handleInputChange}
          />
        <PriceRentForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckBoxChange={handleCheckboxChange}
        />
        <SpecialRentForm
            formData={formData}
            handleInputChange={handleInputChange}
        /> */}
        <button
          type="submit"
          className="font-Poppins bg-midblue hover:bg-lightblue text-white hover:text-midblue py-2 px-4 rounded"
        >
          Cargar
        </button>
      </form>
    </div>
  );
};
export default RentsForm;
