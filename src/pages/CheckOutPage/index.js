import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { CheckoutForm } from '../../components/CheckoutForm/CheckoutForm';


export default function Checkout() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <CheckoutForm/>

        <Footer/>
    </div>

  );
}
