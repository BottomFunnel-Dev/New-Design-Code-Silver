import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <WishlistProvider>

       <AppRouter/>

       </WishlistProvider>

    </div>
  );
}

export default App;
