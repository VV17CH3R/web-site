import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './Components/MainNav';
import Home from './SitePages/Home';
import Assort from './SitePages/Assort';
import Info from './SitePages/Info';
import Basket from './SitePages/Basket';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
          <ScrollToTop></ScrollToTop>
          <MainNav/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sitePages/Assort" element={<Assort/>}></Route>
            <Route path="/sitePages/Info" element={<Info/>}></Route>
            <Route path="/sitePages/Basket" element={<Basket/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
