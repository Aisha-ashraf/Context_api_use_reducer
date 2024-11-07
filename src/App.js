
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import { BrowserRouter  , Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Context from './Context/Context';

function App() {
  return (
    <Context>
    <BrowserRouter>
  <Header/>
  <div>
  <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
  </div>
    </BrowserRouter>
    </Context>
  );
}

export default App;
