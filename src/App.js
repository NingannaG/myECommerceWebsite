import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Annoncement from './component/annoncement/Annoncement';
import Slider from './component/slider/Slider';
import Categary from './component/Categary';
import Products from './component/slider/Products';
import Newsletter from './component/slider/Newsletter';
import Footer from './component/annoncement/Footer';

function App() {
  return (
    <>
    <Annoncement/>
    <Navbar/>
    <Slider/>
    <Categary/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </>
  );
}

export default App;
