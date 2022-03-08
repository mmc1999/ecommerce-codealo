import { Route, Routes, HashRouter} from "react-router-dom";
import {ProductoProvider} from "./context/contextCarrito";
import Home from "./pages/Home";
import Pagar from "./pages/Pagar";

function App() {
  return (
    <>
      <ProductoProvider>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/carrito" element={<Pagar />}/>
              <Route path="/producto"/>
            </Routes>
        </HashRouter>
      </ProductoProvider>
    </>
  );
}

export default App;
