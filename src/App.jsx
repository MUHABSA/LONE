import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './Firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { IsLoginProvider } from './context/IsLoginContext';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import MagazineDetail from './pages/MagazineDetail';
import ProductMap from './pages/ProductMap';
import MyPage from './pages/MyPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Splash from './pages/Splash';
import './styles/Global.css';

function App() {
  const [productData, setProductData] = useState([]);

  const productCollectionRef = collection(db, 'products');
  const getData = async () => {
    try {
      const q = query(productCollectionRef, orderBy('likeCount', 'desc'));
      const data = await getDocs(q);
      const newData = data.docs.map((doc) => ({ ...doc.data() }));
      setProductData(newData);
    } catch (e) {
      alert('error');
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <IsLoginProvider>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<LogIn />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/magazine/:id" element={<MagazineDetail />} />
            <Route path="/map" element={<ProductMap />} />
            <Route
              path="/productList"
              element={<ProductList productData={productData} />}
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/myPage" element={<MyPage />} />
          </Route>
        </Routes>
      </IsLoginProvider>
    </div>
  );
}

export default App;
