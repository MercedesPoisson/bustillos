import React from "react";

interface priceRentProps {
  formData: {
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
  };
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleCheckBoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceRentForm: React.FC<priceRentProps> = ({
  formData,
  handleInputChange,
  handleCheckBoxChange,
}) => {
  return (
    <div className="w-1/2 p-4 font-Poppins">
      <h1 className="text-xl text-blue font-semibold font-Poppins mb-1">
        PRECIO
      </h1>
      <div>
        <label>Moneda:</label>
        <select
          name="currency"
          value={formData.currency}
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="">Seleccionar moneda</option>
          <option value="ARS">ARS</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div>
        <label>Monto total:</label>
        <input
          type="number"
          name="total_amount"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.total_amount}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>¿Se pagó seña?</label>
        <input
          type="checkbox"
          name="deposit"
          className="mb-4 ml-2"
          checked={formData.deposit}
          onChange={handleCheckBoxChange}
        ></input>
      </div>

      <div>
        <label>Tipo de cambio:</label>
        <input
          type="number"
          name="exchange_rate"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.exchange_rate}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Monto de la Seña:</label>
        <input
          type="number"
          name="deposit_amount"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.deposit_amount}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Tipo de cambio saldo:</label>
        <input
          type="number"
          name="balance_exchange_rate"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.balance_exchange_rate}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Saldo:</label>
        <input
          type="number"
          name="balance"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.balance}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>¿Tiene pre-viaje?</label>
        <input
          type="checkbox"
          name="pre_viaje"
          className="mb-4 ml-2"
          checked={formData.pre_viaje}
          onChange={handleCheckBoxChange}
        ></input>
      </div>

      <div>
        <label>Estado del Pago</label>
        <select
          name="payment_status"
          value={formData.payment_status}
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="">Seleccionar estado de pago</option>
          <option value="Pagado">Señado</option>
          <option value="Adeuda">Pagado</option>
          <option value="Cancelado">Sin pagos registrados</option>
        </select>
      </div>

      <div>
        <label>Fecha de Pago:</label>
        <input
          type="date"
          name="payment_date"
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          value={formData.payment_date.toString()}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PriceRentForm;
