import React from "react";

interface specialRentProps {
  formData: {
    room_one: string;
    room_two: string;
    room_three: string;
    room_estar: string;
  };
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const SpecialRentForm: React.FC<specialRentProps> = ({
    formData,
    handleInputChange,
}) => {
    return(
        <div className="w-1/2 p-4 font-Poppins">
            <h1 className="text-lg text-blue font-semibold font-Poppins mb-1">
        ARMADO ESPECIAL
        </h1>

        <div>
            <label>Habitación 1:</label>
            <input
                type="text"
                name="room_one"
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                value={formData.room_one}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Habitación 2:</label>
            <input
                type="text"
                name="room_two"
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                value={formData.room_two}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Habitación 3:</label>
            <input
                type="text"
                name="room_three"
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                value={formData.room_three}
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Habitación Estar:</label>
            <input
                type="text"
                name="room_estar"
                className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                value={formData.room_estar}
                onChange={handleInputChange}
            />
        </div>


        </div>
    )
    }

export default SpecialRentForm;