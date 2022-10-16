import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import './App.css';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Forgot from './views/Forgot';
import Reset from './views/Reset';
import Listings from './views/Listings';
import CreateListing from './views/CreateListing';
import EditListing from './views/EditListing';
import EditProfile from './views/EditProfile';
import Dashboard from './views/Dashboard';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Router>
          <Routes>
            <Route path='/sign-in' exact element={<SignIn />} />
            <Route path='/sign-up' exact element={<SignUp />} />
            <Route path='/forgot' exact element={<Forgot />} />
            <Route path='/reset' exact element={<Reset />} />
            <Route path='/listings' exact element={<Listings />} />
            <Route path='/create-listing' exact element={<CreateListing />} />
            <Route path='/edit-listing' exact element={<EditListing />} />
            <Route path='/edit-profile' exact element={<EditProfile />} />
            <Route path='/dashboard' exact element={<Dashboard />} />
            <Route path='/' exact element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
