import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/cart/Cart";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div>
      {/* <Route path="/store" element=<Shop />> */}
      <Header />
      <Shop />
      <Cart />
      <Footer />
      {/* </Route> */}
    </div>
  );
}

export default App;
