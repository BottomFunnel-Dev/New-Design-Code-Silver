import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './style.css';

import { HomeBanner } from "../../components/Homepage/homeBanner/homeBanner";
import { GenderCategory } from '../../components/Homepage/GenderCategory/GenderCategory';
import { Navbar } from '../../components/Homepage/Navbar/Navbar';
import { HomeCards } from '../../components/Homepage/homeCards/homeCards';
import { TrendingCollection } from '../../components/Homepage/TrendingCollection/TrendingCollection';
import { TopSellers } from '../../components/Homepage/TopSellers/TopSellers';
import { HomeMidBanner } from '../../components/Homepage/homeMidbanner/homeMidbanner';
import { LatestReleases } from '../../components/Homepage/LatestReleases/LatestReleases';
import { Testimonial } from '../../components/Homepage/Testimonial/Testimonial';
import { Footer } from '../../components/Homepage/footer/footer';


export default function Homepage() {

  return (
    <div className='backgroundimage'>
      <WishlistProvider></WishlistProvider>
      <Navbar/>
      <HomeBanner />
      <GenderCategory/>
      <HomeCards/>
      <TrendingCollection/>
      <TopSellers/>
      <HomeMidBanner/>
      <LatestReleases/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
