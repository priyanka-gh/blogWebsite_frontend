import React,{useEffect,useState} from 'react'
import './HomeCardDetails.css'
import { useLocation } from "react-router-dom";
import thisblog from '../Home/background.jpg'
const HomeCardDetails = props => {
    return (
        <div className="homecard">
            <ul className="lis">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            {/* <li></li>
            <li></li>
            <li></li> */}
            </ul>
        <div className="header">
            <div className="blogHeader">
              <h3 className="heading">Teen Drama</h3>
              <h1 className="heading">Lorem ipsum dolor sit.</h1>
              <h3 className="heading">Priyanka Ghansela<span> </span></h3>
            </div>
            <div className="blogimg">
              <img className="thisblog" src={thisblog} alt="cardimg"></img>
            </div>
        </div>

        <div className="middle">
            <h4 className="blogcontent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolor rerum ducimus culpa inventore dolorem officiis suscipit, eaque vel unde fuga, quidem non deserunt eos maxime modi. Optio eius pariatur doloribus quaerat. Aliquid a tenetur fugiat nulla culpa, minus enim tempora deleniti consequatur corporis quidem cupiditate nisi aut, sapiente excepturi?</h4>
        </div>
            
        </div>
    )
}

export default HomeCardDetails
