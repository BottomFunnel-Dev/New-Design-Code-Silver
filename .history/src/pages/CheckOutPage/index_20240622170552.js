import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { CheckoutComponent } from '../../components/Checkout/CheckoutComponent';
import { WishListCard } from '../../components/WishList/WishListCard';

export default function Checkout() {

  return (

    <div className='backgroundimage'>
        <Navbar/>

        <CartProvider>
      <WishListCard/>
      <CheckoutComponent />
    </CartProvider>

        <Footer/>
    </div>

  );
}
