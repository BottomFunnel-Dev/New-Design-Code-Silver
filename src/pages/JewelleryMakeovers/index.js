import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { JewelleryMakeover } from '../../components/JewelleryMakeovers/JewelleryMakeovers';


export default function JewelleryMakeovers() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <JewelleryMakeover/>

        <Footer/>
    </div>

  );
}
