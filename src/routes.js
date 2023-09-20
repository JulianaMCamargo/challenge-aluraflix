import Inicio from "pages/Inicio";
import PaginaPadrao from "pages/PaginaPadrao";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
