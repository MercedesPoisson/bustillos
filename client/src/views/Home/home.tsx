import image from "../../utils/receptionist-working-on-her-desk-with-laptop.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "mercedespoisson@yahoo.com" && password === "123") {
      setErrorMessage("");
      console.log("Usuario autenticado");
      navigate("/dashboard");
    } else {
      setErrorMessage("Por favor verifica los datos ingresados");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center w-full max-w-4xl mx-4 sm:mx-auto">
      <div className="w-1/2 p-4">
        <img src={image} alt="Hotel" width={400} height={300} />
      </div>
      <div className="w-1/2 p-4 font-Poppins">
        <h1 className="text-3xl text-midblue font-semibold ">Bienvenida!</h1>
        <h1 className="text-sm">Estas por ingresar al admin de Bustillo 7500. </h1>
        <h1  className="text-sm">Por favor iniciá sesión</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-80 mb-2 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-midblue font-Poppins hover:bg-lightblue text-white hover:text-midblue py-2 px-4 rounded"
          >
            Iniciar Sesión
          </button>

          {errorMessage && <p className="text-blue mt-2 text-sm" >{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
export default Home;
