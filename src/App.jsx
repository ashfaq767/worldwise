import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
function App() {
  const [loading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  useEffect(function () {
    const loadCities = async () => {
      try {
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
        setIsLoading(true);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} loading={loading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} loading={loading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} loading={loading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

console.log("Commit no 2");
export default App;
