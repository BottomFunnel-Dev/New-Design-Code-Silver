import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { ContactUs } from '../../components/Contact/ContactUs';


export default function Contact() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <ContactUs/>

        <Footer/>
    </div>

  );
}
