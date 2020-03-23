import React from 'react';
import {Route, useParams} from 'react-router-dom'

import {About, Education, Skills, WorkExperiences} from './Pages'
import NavTab from './NavTab'

const Page = () => {
    const url = useParams()

    const componentSet = {
        'About': About,
        'Education': Education,
        'Skills': Skills,
        'Work Experiences': WorkExperiences
       }

    const ComponentPage = componentSet[url.url]

    return (
        <>
        <div className="row" style={{background:" linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )"}}>
            <div className="col-4">
                <NavTab/>
            </div>
            <div className="col-7">
                <div className="border shadow-lg mb-5 rounded"
                style={{height: '550px', width: '100%' ,margin: "50px", marginLeft: "0px", overflow: "hidden", color: "white" }}>
                    <Route exact path={`/${url.url}`} component={ComponentPage}/>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}
export default Page