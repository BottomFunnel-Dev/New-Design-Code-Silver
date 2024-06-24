import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from '../../components/Homepage/Navbar/Navbar';
import { Footer } from '../../components/Homepage/footer/footer';
import { WishListCard } from '../../components/WishList/WishListCard';


export default function Wishlist() {

  return (

    <div className='backgroundimage'>
        </WishlistProvider>
        <Navbar/>

        <WishListCard/>
        
        <Footer/>
        </WishlistProvider>
    </div>

  );
}
