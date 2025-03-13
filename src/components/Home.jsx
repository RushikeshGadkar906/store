import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { fetchProducts } from "../redux/slice/porduct";
import { useDispatch, useSelector } from "react-redux";
import Brand from "./Brand";
import Hero from "./Hero";
import CustomeProductLauncher from "./CustomeProductLauncher";
import CategoryFilter from "./CategoryFilter";

const Home = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.products);
  const [storeProducts, setStoreProducts] = useState([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const productLength = storeProducts?.length;

  // console.log(topSelling);

  const newArrival = () => {
    let num1 = Math.floor(Math.random() * productLength);
    let num2 = num1 + 4;
    const res = storeProducts?.slice(num1, num2);
    setNewArrivalProducts(res);
  };

  const topSelling = () => {
    const res = storeProducts?.filter((sp) => sp.minimumOrderQuantity < "5");
    let num1 = Math.floor(Math.random() * res?.length);
    let num2 = num1 + 4;
    const newRes = res?.slice(num1, num2);
    setTopSellingProducts(newRes);
  };

  useEffect(() => {
    if (storeData) setStoreProducts(storeData?.data?.products);
    newArrival();
    topSelling();
  }, [storeData]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Brand />

        <div className="container">
          <CustomeProductLauncher
            title="NEW ARRIVALS"
            data={newArrivalProducts}
            loading={storeData.isLoading}
          />
          <CustomeProductLauncher
            title="top selling"
            data={topSellingProducts}
            loading={storeData.isLoading}
          />

          <CategoryFilter />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
