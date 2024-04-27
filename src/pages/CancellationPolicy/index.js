import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Cancellation } from '../../components/CancellationPolicy/Cancellation';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';


export default function CancellationPolicy() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <Cancellation/>

        <Footer/>
    </div>

  );
}
