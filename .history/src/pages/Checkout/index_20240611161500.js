import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { CheckOut } from '../../components/Checkout/checkOut';


export default function Checkout() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <CheckOut/>

        <Footer/>
    </div>

  );
}
