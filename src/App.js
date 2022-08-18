import { Routes, Route } from "react-router-dom";
import { Balance, Channel, Homepage, Product, Transaction } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/product" element={<Product />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </>
  );
}

export default App;
