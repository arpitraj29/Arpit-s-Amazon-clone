import React from 'react';
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
      <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      <div className="home_row">
        <Product id="112342" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={29.99}
          image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
          rating={3}
           />

        <Product id="112456" title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
          price={202}
          image="https://images-na.ssl-images-amazon.com/images/I/61PDbUd1VaL._SX679_.jpg"
          rating={4}
          />

      </div>
      <div className="home_row">
      <Product id="112457" title="Ikigai: The Japanese secret to a long and happy life Hardcover – 27 September 2017"
        price={10}
        image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
        rating={5}
      />
      <Product id="112458" title="HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 39.62 cms (15.6 inches) FHD Screen, Windows 10, MS Office (15s-gr0011AU)"
        price={300.5}
        image="https://images-na.ssl-images-amazon.com/images/I/41mQtYQUzmL.jpg"
        rating={4}
      />
      <Product id="112459" title="Symphony Hi Cool i Modern Personal Room Air Cooler 31-litres, with Remote, Honeycomb Pad, Multi-Stage Air Purification (White)"
        price={105}
        image="https://images-eu.ssl-images-amazon.com/images/I/41qMONG5HeL._AC_SX184_.jpg"
        rating={3}
      />


        </div>
        <div className="home_row">
        <Product id="112460" title="Qualimate Smart Fitness Cycle Digital Foldable Portable Foot Pedal Exerciser Cycle for Home Gym Fitnes"
          price={41}
          image="https://images-eu.ssl-images-amazon.com/images/I/41CQGByHXfS._SY300_SX300_QL70_FMwebp_.jpg"
          rating={4}
        />


          </div>
      </div>
    </div>
  )
}

export default Home
//59:27
