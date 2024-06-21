import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { CheckoutComponent } from '../../components/Checkout/CheckoutComponent';


export default function Track() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <CheckoutComponent/>

        <Footer/>
    </div>

  );
}
