import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface WhenRentProps {
  formData: {
    dateRange: {
      start_date: Date | null;
      end_date: Date | null;
    };
  };
  handleDatePickerChange: (name: string, date: Date | null) => void;
}

const WhenRentForm: React.FC<WhenRentProps> = ({
  formData,
  handleDatePickerChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(
    formData.dateRange.start_date
  );
  const [endDate, setEndDate] = useState<Date | null>(
    formData.dateRange.end_date
  );

  const handleDateChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    console.log("Fecha de inicio:", start);
    console.log("Fecha de fin:", end);
    setStartDate(start);
    setEndDate(end);
    // Luego, llama a tu función handleDatePickerChange para actualizar el estado en RentsForm
    handleDatePickerChange("start_date", start);
    handleDatePickerChange("end_date", end);
  };

  return (
    <div className="w-1/2 p-4 font-Poppins">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
        CUANDO
      </h1>
      <div>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          selected={startDate}
          startDate={startDate}
          minDate={new Date()}
          endDate={endDate}
          onChange={handleDateChange}
          selectsRange
          inline
        />
      </div>

      <div className="flex justify-around mb-2">
        <p>
          <span>Desde: </span>
          <span>
            {startDate
              ? startDate.toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "-"}
          </span>
          <br />
          <span>Hasta: </span>
          <span>
            {endDate
              ? endDate.toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "-"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WhenRentForm;
