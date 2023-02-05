import { Nav, AboutCountries } from "./components";
import "./style/App.scss";
import { useState } from "react";
import { useFetch } from "../src/hooks/useFetch"
import { useTheme } from "./hooks/useTheme";
import { Route, Routes } from "react-router-dom";
import { HomeCountries } from "./components/HomeCountries";


export function App() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, isLoading } = useFetch(url);
  const { theme, setTheme } = useTheme(true);


  return (
    <>
      <Nav setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<HomeCountries data={data} setUrl={setUrl} isLoading={isLoading} />} />
        <Route
          path="/aboutcountries/:country"
          element={<AboutCountries />}
        />
      </Routes>
    </>
  );
}
