import React, { useState } from 'react';
import {Nav, NavItem , NavLink } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from 'react-router-dom';


import './Font'
const NavTab = () => {
  const url = useParams()

  const [activeTab, setActiveTab] = useState(url.url);

  const navDesc = [
    {title: "About", icon:"user"},
    {title: "Education", icon:"graduation-cap"},
    {title: "Skills", icon:"cogs"},
    {title: "Work Experiences", icon: "briefcase"} 
  ]

  const toggle = (tab) => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  console.log(url.url)
    return (
        <div className="d-flex align-items-center" 
        style={{minHeight: "100vh", color: "white", backgroundColor: "#2D2D2D",  boxShadow: "5px 10px 10px #888888"}}>
            <div className="row"></div>
            <div className="col-6"></div>
            <div className="col-6">
            <Link to="/Menu">
              <button type="button" className="btn btn-outline-light btn-block mb-5" ><FontAwesomeIcon icon="home"/> Home</button>
            </Link>
            <Nav card tabs>
                <NavItem>
                   {navDesc.map((d, i) => (
                   <NavLink
                        key={`tab-${i}`}
                        tag={Link}
                        to={`/${d.title}`}
                        className={classnames({active: activeTab === d.title})}
                        style={{padding:"1rem"}}
                        onClick={() => { toggle(d.title); }}
                    >
                    <FontAwesomeIcon icon={d.icon} />{" "} {d.title}
                    </NavLink> ))}
                </NavItem>
            </Nav>
            </div>
        </div>
    )
}

export default NavTab;