
import React from 'react';
import './AlternativeHome.css';
import Anima2 from "../Anima2.json"
import Lottie from "lottie-react"
import { Link } from 'react-scroll';


const AlternativeHome = () => {
  return (
    <div className="alternative-home">
      <Link
        to="addBook"
        smooth={true}
        duration={500}
      >
        <div className="graphic-container">
          <Lottie animationData={Anima2}/>
          <h2>Hi Ana! Mau baca buku apa hari ini?</h2>
        </div>
      </Link>
    </div>
  );
};


export default AlternativeHome;