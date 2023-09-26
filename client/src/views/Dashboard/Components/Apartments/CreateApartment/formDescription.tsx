interface FormDescriptionProps {
  formData: {
    description: string;
  };
  handleInputChangeTextArea: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const FormDesciption: React.FC<FormDescriptionProps> = ({
  formData,
  handleInputChangeTextArea,
}) => {
  return (
    <div>
      <textarea
        name="description"
        id="description"
        placeholder="Descripción"
        cols={30}
        rows={10}
        value={formData.description}
        onChange={handleInputChangeTextArea}
        className="block w-80 mb-2 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default FormDesciption;
