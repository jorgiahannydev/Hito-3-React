import Cart from './components/cart/Cart';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
// import Home from './components/home/Home';
// import LoginPage from './components/auth/LoginPage';
// import RegisterPage from './components/auth/RegisterPage';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
