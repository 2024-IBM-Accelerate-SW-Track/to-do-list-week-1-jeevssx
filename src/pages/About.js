import React, { Component } from 'react';
import "./About.css";
import PFP from "../assets/PFP.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div className="split left">
      <div className="centered">
      <img 
      className="profile_image"
      src={PFP}
      // Image goes here  ^^^
      alt="Profile Pic"
      ></img>
      </div>
      </div>
      <div className="split right">
      <div className="centered">
      <div className="name_title">Jeevan Shahi</div>
      <div className="brief_description">
      <p>Rising junior attending Virginia Tech studying CS</p>
      <p>In my free time I like to binge shows, make friends, and code</p>
      </div>
      </div>
      </div>
      </div>
    )
  }
}