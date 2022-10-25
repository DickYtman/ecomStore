import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/explore' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes> 
      <Navbar />
    </>
  );
}

export default App;
