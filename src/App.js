import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Annoncement from './component/annoncement/Annoncement';
import Slider from './component/Slider';
import Categary from './component/Categary';
import Products from './component/Products';
import Newsletter from './component/Newsletter';
import Footer from './component/annoncement/Footer';
import ProductList from './pages/SingleProduct';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './component/Product';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Filter from './pages/slider/Filter';
import { Provider } from 'react-redux';
import store from './pages/annoncement/store';
import Success from './pages/navbar/Success';

function App() {
  const user = false;
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Annoncement />
            <Slider />
            <Categary />
            <Products/>
            <Newsletter />
            <Footer />
          </Route>
          <Route path="/product/:cat">
            <Navbar />
            <Annoncement />
            <Filter/>
            <Newsletter />
            <Footer />
          </Route>
          <Route exact path="/products/:id">
            <ProductList />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/" /> :<Login/>
            }
          </Route>
          <Route exact path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/success">
            <Success/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
