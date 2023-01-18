import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./helpers/hooks/useGlobalContext";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success/Success";

const App = () => {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/categories/:categoryId/product/:productId"
              element={<Detail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success-checkout" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
