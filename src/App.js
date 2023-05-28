import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from "./pages/Auth"
import Header from "./components/Header"
import Footer from './components/Footer';
import Home from './pages/Home';
import Hospitality from './pages/Hospitality';
import HospitalityAdmin from './pages/HospitalityAdmin';
import HumanResources from './pages/HumanResources';
import HumanResourcesAdmin from './pages/HumanResourcesAdmin';
import Vacation from './pages/Vacation';
import PrintVacation from './pages/PrintVacation';
import PrivateRoutes from './utils/PrivateRoutes';
import Register from './pages/Register';
function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Auth />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/hospitality-admin" element={<HospitalityAdmin />} />
          <Route path='/' element={<Home />} />
          <Route path="/human" element={<HumanResources />} />
          <Route path="/human-admin" element={<HumanResourcesAdmin />} />
          <Route path="/vacation/:id" element={<Vacation />} />
        </Route>
        <Route path="/vacation/print/:id" element={<PrintVacation />} />
        <Route path="*" element={<p style={{ color: "#fff" }}>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;