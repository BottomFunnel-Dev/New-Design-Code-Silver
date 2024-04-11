import 'bootstrap/dist/css/bootstrap.min.css';


import { HomeBanner } from "../../components/Homepage/homeBanner/homeBanner";
import { HomeCards } from "../../components/Homepage/homeCards/homeCards";
import { HomeMidBanner } from "../../components/Homepage/homeMidbanner/homeMidbanner";
import { HomeMystory } from '../../components/Homepage/homeMystory/homeMystory';
import { HomeNewsLetter } from '../../components/Homepage/homeNewsletter/homeNewsletter';
import { HomeGalary } from '../../components/Homepage/homeGalary/homeGalary';
import { Footer } from '../../components/Homepage/footer/footer';
export default function Homepage() {

  return (
    <div>
      <HomeBanner />
      <HomeCards />
      <HomeMidBanner />
      <HomeMystory/>
      <HomeNewsLetter/>
      <HomeGalary/>
      <Footer/>
    </div>
  );
}
