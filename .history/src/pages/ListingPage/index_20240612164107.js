import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './style.css';

import { Navbar } from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import Slider from '../../components/ListingPage/Slider/Slider';
import { AlsoLike } from '../../components/ListingPage/AlsoLike/AlsoLike';
import { CustomerReview } from '../../components/ListingPage/CustomerReview/CustomerReview';
import { ProductDetail } from '../../components/ListingPage/ProductDetail/ProductDetail';
import { HomeBanner } from '../../components/Homepage/homeBanner/homeBanner';
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
