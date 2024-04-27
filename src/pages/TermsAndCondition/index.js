import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { TermsConditions } from '../../components/TermsConditions/TermsConditions';


export default function TermsAndCondition() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <TermsConditions/>

        <Footer/>
    </div>

  );
}
