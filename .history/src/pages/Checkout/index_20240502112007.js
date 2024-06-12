import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { AccountDetail } from '../../components/Account/AccountDetail';


export default function MyAccount() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <AccountDetail/>

        <Footer/>
    </div>

  );
}
