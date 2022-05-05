import NavbarComponent from "./components/NavbarComponent";
import ProductList from "./db.json";
import { useState } from "react";
function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <NavbarComponent cartCount={cartCount} cartItems={ProductList} />
    </div>
  );
}

export default App;
