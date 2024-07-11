import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './style.css';

import { Navbar } from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';


export default function SignupPage() {

  return (
    <div className='backgroundimage'>
      <Navbar/>
      
      <Footer/>
    </div>
  );
}
