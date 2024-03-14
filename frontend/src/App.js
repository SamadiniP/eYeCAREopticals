import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingScreen from './screens/BookingScreen';
import EditUserScreen from './screens/EditUserScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ServicesScreen from './screens/ServicesScreen';
import EyeGlassesScreens from './screens/EyeGlassesScreens';
import OphthalmologistsScreen from './screens/OphthalmologistsScreen';
import EarSpecialistsScreen from './screens/EarSpecialistsScreen';

import RayBan from './components/RayBan';
import Che from './components/Che';
import Chanel from './components/Chanel';
import Tens from './components/Tens';
import RayBanModel from './components/RayBanModel';
<<<<<<< HEAD
import AddDoctor from './screens/AddDoctor';
=======
import FeedbackScreen from './screens/FeedbackScreen';
import AddRepairmentDetails from './screens/AddRepairmentDetails';
>>>>>>> main

function App() {
  return (
    <div>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/bookings' element={<BookingScreen />} />
          <Route path='/editprofile/:userId' element={<EditUserScreen />} />
          <Route path='/aboutus' element={<AboutUsScreen />} />
          <Route path='/ophthalmologists' element={<OphthalmologistsScreen />} />
          <Route path='/EarSpecialistsScreen' element={<EarSpecialistsScreen />} />
          <Route path='/services' element={<ServicesScreen />} />
          <Route path='/eyeglasses' element={<EyeGlassesScreens />} />
          <Route path='/rayban/:brand' element={<RayBan />} />
          <Route path='/che/:brand' element={<Che />} />
          <Route path='/chanel/:brand' element={<Chanel />} />
          <Route path='/tens/:brand' element={<Tens />} />
          <Route path='/:brand/:model' element={<RayBanModel />} />
<<<<<<< HEAD
          <Route path='/adddoctor' element={<AddDoctor />} />
=======
          <Route path='/:addrepdetails' element={<AddRepairmentDetails />} />
>>>>>>> main
          <Route path='/' element={<HomeScreen />} />  
          <Route path='/addfeedback' element={<FeedbackScreen />} />
        </Routes>

        <Footer />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
