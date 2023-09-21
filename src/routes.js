import Inicio from "pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import PaginaPadrao from "pages/PaginaPadrao";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="novo-video" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
