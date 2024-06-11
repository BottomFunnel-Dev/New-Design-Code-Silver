import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { FaqAccordian } from '../../components/Faq/FaqAccordian';


export default function Faq() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <FaqAccordian/>
        
        <Footer/>
    </div>

  );
}
