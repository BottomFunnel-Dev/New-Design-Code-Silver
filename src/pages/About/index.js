import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { AboutLotus } from '../../components/AboutUs/AboutLotus/AboutLotus';
import { AboutMidBanner } from '../../components/AboutUs/AboutMidBanner/AboutMidBanner';
import { AboutLotusRight } from '../../components/AboutUs/AboutLotusRight/AboutLotusRight';


export default function AboutUs() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <AboutLotus/>
        <AboutMidBanner/>
        <AboutLotusRight/>
        
        <Footer/>
    </div>

  );
}
