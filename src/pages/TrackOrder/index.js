import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { TrackYourOrder } from '../../components/TrackYourOrder/TrackYourOrder';


export default function TrackOrder() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <TrackYourOrder/>

        <Footer/>
    </div>

  );
}
