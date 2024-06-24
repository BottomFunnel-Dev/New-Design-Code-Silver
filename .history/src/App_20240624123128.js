import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <div className="App">
       <AppRouter/>
    </div>
  );
}

export default App;
