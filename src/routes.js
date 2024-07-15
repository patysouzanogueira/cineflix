import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import VideoCadastre from "./pages/VideoCadastre";

function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
             <Route path="/" element={ <Home /> }></Route>
             <Route path="/watch/:id" element={ <Watch /> }></Route>
             <Route path="/cadastre" element={ <VideoCadastre /> }></Route>
             <Route path="*" element={ <PageNotFound /> }></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;