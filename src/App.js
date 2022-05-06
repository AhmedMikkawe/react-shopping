import NavbarComponent from "./components/NavbarComponent";
import ProductListComponent from "./components/ProductListComponent";
import Cart from "./components/Cart";
import ProductList from "./db.json";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // what happens when add to cart button clicked
  const onAdd = (product) => {
    /* used price because data doesn't have id  because I want the cart menu to show unique products
    and if a product already exist in the cart I increase the quantity (qty) is added to the object
    */
    const exist = cartItems.find((x) => x.price === product.price);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.price === product.price ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent cartCount={cartItems.length} cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductListComponent
                products={ProductList.products}
                onAdd={onAdd}
              />
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
