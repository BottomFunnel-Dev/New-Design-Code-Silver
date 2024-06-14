import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './style.css';

import { Navbar } from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { AlsoLike } from '../../components/ListingPage/ListData/AlsoLike';
import { MainBanner } from '../../components/ListingPage/MainBanner/MainBanner';



export default function ListingPage() {

  return (
    <div className='backgroundimage'>
      <Navbar/>
      <MainBanner/>
      <AlsoLike/>
      <Footer/>
    </div>
  );
}
