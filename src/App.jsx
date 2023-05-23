import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MagazineDetail from './pages/magazineDetail/MagazineDetail';
import Map from './pages/map/Map';
import MyPage from './pages/myPage/MyPage';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetail/ProductDetail';
import Splash from './pages/splash/Splash';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/magazine/:id" element={<MagazineDetail />} />
        <Route path="/map" element={<Map />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
