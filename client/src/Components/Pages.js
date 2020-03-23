import React from 'react';
import './Pages.css'
import Educ from '../Assets/Education.jpg'
import Skll from '../Assets/Skills.jpg'
import WrkExp from '../Assets/WrkExp.jpg'
import Abt from '../Assets/About.jpg'


const About = () => {
    return (
        <div className="row">
        <div className="col-6">
            <div> 
                <h1 className="text-center py-5">About</h1></div>
                <div className="p-5"
                     style={{textAlign: "justify"}}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lectus est, pharetra vel ipsum ac, vehicula faucibus felis. Donec sagittis mattis lectus eget dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum sollicitudin, dolor ac iaculis mollis, metus orci fermentum dolor, ut venenatis neque tellus non ante. Quisque iaculis, ante eget fringilla aliquet, ligula risus lacinia ar</div>
        </div>
        <div className="col-6">
            <img src={Abt}/>
        </div>
    </div>
)}

const Education = () => {

    return(
        <div className="row">
            <div className="col-6">
                <img src={Educ}/>
            </div>
            <div className="col-6">
                <div> 
                    <h1 className="text-center py-5">Education</h1></div>
                <ul className="page">
                <li title="2014-2019"><div>
                    <h5>Bachelor of Science in Computer Engineering</h5>
                    <p>Colegio de Montalban</p>
                </div></li>
                <li title="2010-2014"><div>
                    <p>Tagumpay National High School</p>
                </div></li>
                <li  title="2003-2010"><div>
                    <p>Tagumpay National Elementary</p>
                </div></li>
                </ul>
            </div>
        </div>
)}

const Skills = () => {
    return(
        <div className="row">
        <div className="col-6">
            <div> 
                <h1 className="text-center py-5">Skills</h1></div>
            <ul className="page">
            <li title="1">
                <h3>ReactJS</h3>
            </li>
            <li title="2">
                <h3>HTML</h3>
            </li>
            <li  title="3">
                <h3>CSS</h3>
            </li>
            <li  title="4">
                <h3>JavaScript</h3>
            </li>
            </ul>
        </div>
        <div className="col-6">
            <img src={Skll}/>
        </div>
    </div>
)}

const WorkExperiences = () => {
    return(
        <div className="row">
        <div className="col-6">
            <img src={WrkExp}/>
        </div>
        <div className="col-6">
            <div> 
                <h1 className="text-center py-5">Work Experiences</h1></div>
            <ul className="page">
            <li title="2019-2020"><div>
                <h5>Trainee Programmer</h5>
                <p>NovaSolutions</p>
            </div></li>
            </ul>
        </div>
    </div>
)}

export {About, Education, Skills, WorkExperiences}