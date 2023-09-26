import React from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import Modal from "react-modal";
import deleteApartments from "../../../../../redux/actions/deleteApartment";
import Swal from "sweetalert2";
import { Apartments } from "../../../../../redux/interfaces";

interface DeleteApartmentProps {
  isOpen: boolean;
  onClose: () => void;
  apartment: Apartments | null;
  onDelete: () => void;
}

const DeleteApartment: React.FC<DeleteApartmentProps> = ({
  isOpen,
  onClose,
  apartment,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const handleDeleteApartment = async () => {
    if(apartment)
    try {
      await dispatch(
        deleteApartments(apartment.id_apartment) as unknown as AnyAction
      );
      Swal.fire(
        "Compra borrada!",
        "Compra borrada con éxito!",
        "success"
      );
      onDelete();
      onClose();
    } catch (error) {
      console.log("Error al eliminar la compra", error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Guardian Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          maxWidth: "80%",
          maxHeight: "80%",
          overflowX: "auto",
          padding: "20px",
        },
      }}
      className="absolute w-[400px] bg-gray-200 border-2 border-violeta-timbring rounded-lg"
    >
      <div className="flex flex-col justify-center align-center items-center gap-[3%]">

         <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 pt-6 mb-6">
          Seleccionaste: <span className="text-violeta-timbring"><br/>{apartment?.title}</span>
        </h1>

        <p className="mb-6 text-black">¿Estás seguro/a que querés borrar esta Compra?</p>
        <div className="flex">

          <button
            onClick={handleDeleteApartment}
            className="mt-6 mr-6 text-white bg-red-500 hover:bg-violeta-claro h-[2em] w-[7em] rounded-full text-md font-medium"
          >
            Borrar
          </button>

          <button
            onClick={onClose}
            className="mt-6 text-white bg-violeta-timbring hover:bg-violeta-claro h-[2em] w-[7em] rounded-full text-md font-medium"
          >
            Cancelar
          </button>
        </div>

      </div>
    </Modal>
  );
};

export default DeleteApartment;