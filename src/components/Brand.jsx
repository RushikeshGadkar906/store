import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";

const Brand = () => {
  const storePorducts = useSelector((state) => state.products.data);
  const [productBrand, setProductBrand] = useState([]);

  useEffect(() => {
    if (storePorducts) {
      const brand = storePorducts.products?.map((p) => p.brand);
      if (brand) setProductBrand([...new Set(brand)]);
    }
  }, [storePorducts]);

  return (
    <>
      <section className="brandSlider">
        <div className="container">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {productBrand?.map((brand, i) => {
              return (
                <SwiperSlide key={i}>
                  <h1 className="brandName">{brand}</h1>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Brand;
