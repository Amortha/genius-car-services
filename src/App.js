
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About'
import Header from './Pages/shared/Header/Header';
import Footer from './Pages/shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/service/:serviceId" element={<ServiceDetail/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
