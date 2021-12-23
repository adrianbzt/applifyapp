import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class Acasa extends Component {
  render() {
    return (
        <Carousel>
            <div>
                <img className="car-image" src="https://expo-media.ro/wp-content/uploads/2021/06/enel1-1200x675.jpg" width={60}/>
                <p className="legend">enel</p>
            </div>
            <div>
                <img className="car-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/ENGIE_logotype_2018.png" />
                <p className="legend">engie</p>
            </div>
            <div>
                <img className="car-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Electrica_logo.svg/1200px-Electrica_logo.svg.png" />
                <p className="legend">electrica</p>
            </div>
        </Carousel>
    );
}
}
 
export default Acasa;