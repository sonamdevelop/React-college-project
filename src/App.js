import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';

import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </>
  );
}

export default App;
