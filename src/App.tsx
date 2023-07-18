import { Divider } from "@mui/material";
import { Header } from "./Components/Products/Header";
import { Categoreis } from "./Components/Products/Categories";
import { Products } from "./Components/Products/Products";
import { Footer } from "./Components/Products/Footer";

function App() {
  return (
    <div>
      <Header />
      <Divider />
      <Categoreis />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
