interface FormImagesProps {
    formData: {
        images: string[]; 
        
    };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Cambia esto al tipo correcto
}

const FormImages: React.FC<FormImagesProps> = ({ formData, handleInputChange }) => {
    
    return(
        <div>
            <div className="relative mt-4 font-Poppins">
                <h2 className="mb-2 text-sm font-semibold">Imágenes</h2>
                <input
                  type="file"
                  name="imagen1"
                  placeholder="Imagen 1"
                  value={formData.images}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                  multiple={false}
                />

                <input
                  type="file"
                  name="imagen2"
                  placeholder="Imagen 2"
                  value={formData.images}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                  multiple={false}
                />
                <input
                  type="file"
                  name="imagen3"
                  placeholder="Imagen 3"
                  value={formData.images}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                  multiple={false}
                />

                <input
                  type="file"
                  name="imagen4"
                  placeholder="Imagen 4"
                  value={formData.images}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                  multiple={false}
                />

                <input
                  type="file"
                  name="imagen5"
                  placeholder="Imagen 5"
                  value={formData.images}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                  multiple={false}
                />
                <input
                  type="file"
                  name="imagen6"
                  placeholder="Imagen 6"
                  value={formData.images}
                  onChange={handleInputChange}
                  className="block w-80 mb-2 p-2 border border-gray-300 rounded"
                  multiple={false}
                />
              </div>

              
        </div>
        
    )
}
export default FormImages;