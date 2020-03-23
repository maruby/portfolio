import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Contacts.css'
import './Font'

const Contacts = () =>{
    const buttonDesc = [
        {icon: "phone", name: "09433052736"},
        {icon: "envelope", name: "Gmail"},
        {icon: "facebook-f", name: "Facebook"},
        {icon: "github", name: "Github"},   
    ]
    return (
        <div className="d-flex align-items-center justify-content-center" 
        style={{minHeight: "100vh", color: "white", backgroundColor: "#2D2D2D",  boxShadow: "5px 10px 10px #888888"}}>
            <div className="row"></div>
            <div className="col-6"><h2 className="verticalText">CONTACTS</h2></div>
            <div className="col-6">
                {buttonDesc.map((b, i) => <button key={`button-${i}`}type="button" className="btn btn-outline-light m-3"><FontAwesomeIcon icon={b.icon}/> {b.name}</button>)}
            </div>
        </div>
    )
}
export default Contacts