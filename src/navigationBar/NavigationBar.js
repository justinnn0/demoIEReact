
import './NavigationBar.css';
import { Link, Route, useRouteMatch } from "react-router-dom";



const NavigationBar = () => {
  return(
    <ul>
    <li><a className="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>

    </ul>
  )
};


  export default NavigationBar;