import { Route, Routes, Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Home from "./views/Home/home";
import Layout from "./views/Dashboard/shared/Layout";
import Dashboard from "./views/Dashboard/Dashboard";
import ApartmentsForm from "./views/Dashboard/Components/Apartments/ApartmentsForm";
import AllApartments from "./views/Dashboard/Components/Apartments/AllApartments";
import RentsForm from "./views/Dashboard/Components/Rents/RentsForm";
import AllRents from "./views/Dashboard/Components/Rents/AllRents";
import SetPrices from "./views/Dashboard/Components/Prices/SetPrices";
import Prices from "./views/Dashboard/Components/Prices/prices";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/*" element={<Layout />}> 
        <Route index element={<Dashboard />} />
        <Route path="formapartment" element={<ApartmentsForm />} />
        <Route path="allapartments" element={<AllApartments />} />
        <Route path="formrents" element={<RentsForm />} />
        <Route path="allrents" element={<AllRents />} />
        <Route path="setprices" element={<SetPrices />} />
        <Route path="prices" element={<Prices />} />
      </Route>
      
    </Routes>
  );
}

export default App;
