/* eslint-disable no-unused-vars */
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from "./customer/components/pages/HomePage/HomePage";
import { Footer } from "./customer/components/Footer/Footer";
import { Navigation } from "./customer/components/navigation/navigation";
import Product from "./customer/components/Product/Product";
const App=()=> {
  return (
    <>
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
