import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames"
import { Link } from 'react-router-dom'
import Ripples from 'react-ripples'

import './Font'
import './Tile.css'

const Tile = ({icon, title}) =>{
    const [hovered, setHovered] = useState(false)

    return (
        <Link to={`${title}`}>
        <Ripples>
        <div className={classNames(`p-5 m-4 text-center ${!hovered ? "border shadow-lg p-3 mb-5 rounded": "rounded hovered"}`)}
            style={{height: '250px', width: '200px', backgroundColor:"#FFFFFF"}}
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
            >
                <div className="text-muted m-4"><FontAwesomeIcon icon={icon} size="3x" /></div>
                <p className="border border-dark mt-4">{title}</p>
        </div>
        </Ripples>
        </Link>
    )
}
export default Tile