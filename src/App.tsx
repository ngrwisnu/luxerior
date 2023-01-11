import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/categories/:categoryId/product/:productId"
            element={<Detail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
