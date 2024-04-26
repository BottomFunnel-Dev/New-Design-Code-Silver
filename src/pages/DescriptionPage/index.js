import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './style.css';

import { Navbar } from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import Slider from '../../components/DescriptionPage/Slider/Slider';
import { AlsoLike } from '../../components/DescriptionPage/AlsoLike/AlsoLike';
import { CustomerReview } from '../../components/DescriptionPage/CustomerReview/CustomerReview';
import { ProductDetail } from '../../components/DescriptionPage/ProductDetail/ProductDetail';



export default function DescriptionPage() {

  return (
    <div className='backgroundimage'>
      <Navbar/>
      <Slider/>
      <ProductDetail/>
      <CustomerReview/>
      <AlsoLike/>
      <Footer/>
    </div>
  );
}
