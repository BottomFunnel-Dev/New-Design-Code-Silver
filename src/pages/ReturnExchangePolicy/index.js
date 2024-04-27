import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { ReturnExchangePolicy } from '../../components/ReturnExchangePolicy/ReturnExchangePolicy';


export default function ReturnExchange() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <ReturnExchangePolicy/>

        <Footer/>
    </div>

  );
}
