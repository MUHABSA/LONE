import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase';
import Header from '../components/common/Header';
import NavBar from '../components/common/NavBar';
import KakaoMap from '../components/KakaoMap';
import PlaceInfoModal from '../components/PlaceInfoModal';

export default function ProductMap() {
  const [productData, setProductData] = useState([]);
  const [isMarkerClicked, setIsMarkerClicked] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState('');

  useEffect(() => {
    const productCollectionRef = collection(db, 'products');
    const getData = async () => {
      try {
        const q = query(productCollectionRef, orderBy('product_name'));
        const data = await getDocs(q);
        const newData = data.docs.map((doc) => ({ ...doc.data() }));
        setProductData(newData);
      } catch (e) {
        alert('error');
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <Header />
        <KakaoMap
          productData={productData}
          isMarkerClicked={isMarkerClicked}
          setIsMarkerClicked={setIsMarkerClicked}
          setSelectedSeller={setSelectedSeller}
        />
        <NavBar />
      </div>
      {isMarkerClicked ? (
        <PlaceInfoModal
          productData={productData}
          selectedSeller={selectedSeller}
          isMarkerClicked={isMarkerClicked}
          setIsMarkerClicked={setIsMarkerClicked}
        />
      ) : null}
    </>
  );
}
