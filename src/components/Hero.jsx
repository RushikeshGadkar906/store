import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className=" hero_content_wrapper">
                <div>
                  <h1 className="heading">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                  </h1>
                  <p className="para">
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                  </p>
                  <button className="custome_btn black">Shop Now</button>
                </div>

                <div className="d-flex hero_counter">
                  <div>
                    <h4>200+</h4>
                    <p>International Brands</p>
                  </div>
                  <div>
                    <h4>20,000+</h4>
                    <p>High-Quality Products</p>
                  </div>
                  <div>
                    <h4>30,000+</h4>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
