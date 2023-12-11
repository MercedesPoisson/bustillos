import React from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import Modal from "react-modal";
import deletePrice from "../../../../../src/redux/actions/deletePrice";
import Swal from "sweetalert2";
import { Prices } from "../../../../../src/redux/interfaces";

interface DeletePriceProps {
  isOpen: boolean;
  onClose: () => void;
  price: Prices | null;
  onDelete: () => void;
}

const DeletePrice: React.FC<DeletePriceProps> = ({
    isOpen,
    onClose,
    price,
    onDelete,
    }) => {
    const dispatch = useDispatch();
    const handleDeletePrice = async () => {
        if(price)
        try {
        await dispatch(
            deletePrice(price.id_price) as unknown as AnyAction
        );
        Swal.fire(
            "Precio borrado!",
            "Precio borrado con éxito!",
            "success"
        );
        onDelete();
        onClose();
        } catch (error) {
        console.log("Error al eliminar el precio", error);
        }
    }
    
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Delete Price Modal"
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
    
            width: "50%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            },
        }}
        >
        <h2>¿Estás seguro que deseas eliminar este precio?</h2>
        <div className="buttons">
            <button className="cancel" onClick={onClose}>
            Cancelar
            </button>
            <button className="delete" onClick={handleDeletePrice}>
            Eliminar
            </button>
        </div>
        </Modal>
    );
    }

export default DeletePrice;