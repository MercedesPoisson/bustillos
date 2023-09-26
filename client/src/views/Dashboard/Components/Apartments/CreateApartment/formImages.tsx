import { useState } from "react";

interface FormImagesProps {
  formData: {
    images: string[];
  };
  handleImageChange: (images: FileList | null) => void;
}

const FormImages: React.FC<FormImagesProps> = ({ formData, handleImageChange  }) => {
  // const [selectedImages, setSelectedImages] = useState<string[]>([]);

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     const imagesArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
  //     setSelectedImages(imagesArray);
  //   }
  // };

  return (
    <div>
      <div className="relative mt-4 font-Poppins">
        <h2 className="mb-2 text-sm font-semibold">Imágenes</h2>
        <input
          type="file"
          name="imagen1"
          onChange={(event) => handleImageChange(event.target.files)}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          multiple={false}
        />

        <input
          type="file"
          name="imagen2"
          onChange={(event) => handleImageChange(event.target.files)}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          multiple={false}
        />

        <input
          type="file"
          name="imagen3"
          onChange={(event) => handleImageChange(event.target.files)}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          multiple={false}
        />

        <input
          type="file"
          name="imagen4"
          onChange={(event) => handleImageChange(event.target.files)}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          multiple={false}
        />

        <input
          type="file"
          name="imagen5"
          onChange={(event) => handleImageChange(event.target.files)}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          multiple={false}
        />
        <input
          type="file"
          name="imagen6"
          onChange={(event) => handleImageChange(event.target.files)}
          className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          multiple={false}
        />

    
      </div>
    </div>
  );
};

export default FormImages;