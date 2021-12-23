import React, { Component } from "react";

import HomepageLayout from "./components/HomepageLayout";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
 
class Main extends Component {
  render() {
    return (
      <HomepageLayout />
      
    );
  }
}
 
export default Main;