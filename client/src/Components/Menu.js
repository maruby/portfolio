import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'

import Tile from './Tile'
import Contacts from './Contacts'
import './Menu.css'
import Page from './Page'



const Menu = () =>{

    const tileDesc = [
        {title: "About", icon:"user"},
        {title: "Education", icon:"graduation-cap"},
        {title: "Skills", icon:"cogs", link:"skills"},
        {title: "Work Experiences", icon: "briefcase"} 
        ]

        
    return (
            <div className="row" style={{background:" linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )"}}>
            <div className="col-4">
                <Contacts />
            </div>
            <div className="col-7">
                <div className="row mx-4 d-flex justify-content-around">
                        {tileDesc.map((d, index) =>  
                            <Tile key={`tile-${index}`} icon={d.icon} title={d.title}/> )}  
                </div>
            </div>
        </div>
    )
}
export default Menu