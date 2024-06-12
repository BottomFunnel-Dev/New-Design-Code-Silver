import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { CheckOut } from '../../components/CheckOut/CheckOut';


export default function Checkout() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <Checkut/>

        <Footer/>
    </div>

  );
}
