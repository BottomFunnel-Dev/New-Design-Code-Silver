import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { PrivacyPolicy } from '../../components/PrivacyPolicy/PrivacyPolicy';


export default function Privacy() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <PrivacyPolicy/>

        <Footer/>
    </div>

  );
}
