import React from 'react';
import { Link } from 'react-router-dom'

import './Home.css'


const Home = () =>{
    return (
        <div className="d-flex flex-column Vertical-center">
            <div className="container text-center">
                <h3 className="Intro-font" style={{color: "white"}}>Hello, I'm <span style={{color: "#FF1493"}}>Maria Ruby Pelueta</span>,</h3>
                <h4 className="Intro-font" style={{color: "white"}}>a front end developer </h4>
            </div>
            <Link to="/Menu">
                <button type="button" className="btn btn-outline-light">Know Me →</button>
            </Link>
        </div>
    )
}
export default Home