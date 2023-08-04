interface FormBooleanProps {
    formData: {
      is_active: boolean;
      weekly_discount: boolean;
      monthly_discount: boolean;
      allow_pets: boolean;
      accessibility: boolean;
      private_access: boolean;
    };
    handleInputChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
  }

const FormBoolean: React.FC<FormBooleanProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div>
      <div className="relative mt-2">
        <h2 className=" px-2 mb-2 text-sm font-semibold">Activo</h2>
        <select
          name="is_active"
          value={formData.is_active.toString()}
          placeholder="Activo"
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className=" relative mt-2">
        <h2 className=" px-2 mb-2 text-sm font-semibold">Permite mascotas</h2>

        <select
          name="allow_pets"
          value={formData.allow_pets.toString()}
          placeholder="Permite mascotas"
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="relative mt-2">
        <h2 className=" px-2 mb-2 text-sm font-semibold">Accesibilidad</h2>
        <select
          name="accessibility"
          value={formData.accessibility.toString()}
          placeholder="Accesibilidad"
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="relative mt-2">
        <h2 className=" px-2 mb-2 text-sm font-semibold">Acceso Privado</h2>
        <select
          name="private_access"
          value={formData.private_access.toString()}
          placeholder="Acceso Privado"
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="relative mt-2">
        <h2 className=" px-2 mb-2 text-sm font-semibold">
          Descuentos semanales
        </h2>
        <select
          name="weekly_discount"
          value={formData.weekly_discount.toString()}
          placeholder="ofrece descuento semanal"
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="relative mt-2">
        <h2 className=" px-2 mb-2 text-sm font-semibold">
          Descuentos mensuales
        </h2>
        <select
          name="monthly_discount"
          value={formData.monthly_discount.toString()}
          placeholder="ofrece descuento semanal"
          onChange={handleInputChange}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
  );
};
export default FormBoolean;
