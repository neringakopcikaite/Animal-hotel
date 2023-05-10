import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Pradzia from "./routes/pradziaRoute/Pradzia";
import Specialistai from "./routes/specialistaiRoute/Specialistai";
import Viesbutis from "./routes/viesbutisRoute/Viesbutis";
import Dresura from "./routes/dresuraRoute/DresuraRoute";
import Kontaktai from "./routes/kontaktaiRoute/KontaktaiRoute";
import SpaRoute from "./routes/spaRoute/SpaRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pradzia />} />
        <Route path="/specialistai" element={<Specialistai />} />
        <Route path="/viesbutis" element={<Viesbutis />} />
        <Route path="/spa" element={<SpaRoute />} />
        <Route path="/dresura" element={<Dresura />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
      </Routes>
    </>
  );
}

export default App;
