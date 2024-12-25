import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./destinations.css"; 

function Destinations() {
  const destinations = [
    { name: "Kochi", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Kochi-725765.jpg" },
    { name: "Alleppey", image: "https://i0.wp.com/tentntrek.com/wp-content/uploads/allepey1.jpg?resize=636%2C426&ssl=1" },
    { name: "Thrissur", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4b/a2/1c/athirapally-falls-in.jpg?w=600&h=-1&s=1" },
    { name: "Munnar", image: "https://s7ap1.scene7.com/is/image/incredibleindia/top-station-munnar-kerala-1-attr-hero?qlt=82&ts=1726672844426" },
    { name: "Bekal", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIQeKNESbYYWVf522bhCkmD1gDu58ahbzfd96gjMP-Mx159bGC-9eSZLKV1y-ddAd77IVVf8L1AEa7BmxszS2y308uAaOE3Z1JhcNnMCLdq1Kf7qJuf78_Pncrb10imPlxTJAlfTPJJFdh/w1200-h630-p-k-no-nu/IMG_20150404_152455_1428143169475.jpg" },
    { name: "Kovalam", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kovalam_beach_trivandrum_kerala.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="destinations">
      <h2>Top Destinations</h2>
      <p>
      Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined 
      beaches and backwaters, a network of canals. Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.
      </p>
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="destination-name">{destination.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Destinations;
