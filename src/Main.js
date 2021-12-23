import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Acasa from "./components/Acasa";
import InfoUtile from "./components/InfoUtile";
import Contact from "./components/Contacte";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Prinde oferta momentului</h1>
          <ul className="header">
            <li><NavLink exact to="/">Acasa</NavLink></li>
            <li><NavLink to="/info_utile">Info Utile</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
            <Route exact path="/" element={<Acasa />}/>
            <Route path="/info_utile" element={<InfoUtile />}/>
            <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;