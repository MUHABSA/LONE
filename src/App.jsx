import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './Firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import Home from './pages/home/Home';
import MagazineDetail from './pages/magazineDetail/MagazineDetail';
import ProductMap from './pages/productMap/ProductMap';
import MyPage from './pages/myPage/MyPage';
import ProductList from './pages/productList/ProductList';
import ProductDetail from './pages/productDetail/ProductDetail';
import Splash from './pages/splash/Splash';
import './styles/Global.css';

function App() {
  const [productData, setProductData] = useState();

  const productCollectionRef = collection(db, 'products');
  const getData = async () => {
    try {
      const q = query(productCollectionRef);
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => ({ ...doc.data() }));
      setProductData(newData);
    } catch (e) {
      alert('에러 발생');
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/magazine/:id" element={<MagazineDetail />} />
        <Route path="/map" element={<ProductMap productData={productData} />} />
        <Route
          path="/productList"
          element={<ProductList productData={productData} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
