import './App.css';
import Header from './pages/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import CheckOut from './pages/CheckOut/CheckOut';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import RequireAuth from './pages/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
