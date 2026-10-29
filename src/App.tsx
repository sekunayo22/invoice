import { Routes, Route } from "react-router";
import Home from "./pages/home";
import ViewInvoice from "./pages/view-invoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoices/:id" element={<ViewInvoice />} />
    </Routes>
  );
}

export default App;
