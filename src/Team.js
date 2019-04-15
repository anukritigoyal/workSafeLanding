import React, { Component } from 'react'
import ally  from './img/ally.jpg'
import anukriti from './img/anukriti.jpeg'
import sagar from './img/sagar.jpeg'
import luke from './img/luke.jpg'

// "col-md-6 col-12"

export default class Team extends Component {
    render() {
        return(
            <section id="team">
            <div className="fifth">
                <h1>Our Team</h1>
                <div className="container">
                    <div className="profile">
                        <img src={ally} className="profile-pic" alt="ally"></img>
                        <div className="profile-text">
                            <h5 className="">Ally Picker</h5>
                            <p>
                                blurb
                            </p>
                        </div>
                    </div>

                    <div className="profile">
                        <img src={anukriti} className="profile-pic" alt="anukriti"></img>
                        <div className="profile-text">
                            <h5 className="">Anukriti Goyal</h5>
                            <p>
                                blurb
                            </p>
                        </div>
                    </div>
                </div> 

                <div className="container">
                    <div className="profile">
                        <img src={sagar} className="profile-pic" alt="sagar"></img>
                        <div className="profile-text">
                            <h5 className="">Sagar Surana</h5>
                            <p>
                                blurb
                            </p>
                        </div>
                    </div>

                    <div className="profile">
                        <img src={luke} className="profile-pic" alt="luke"></img>
                        <div className="profile-text">
                            <h5 className="">Luke Allen</h5>
                            <p>
                                blurb
                            </p>
                        </div>
                    </div>
                </div>

                    {/* <div className="row col-xl-6 col-md-12 p-0 mr-0 ml-0">
                        <img src={luke} className="profile-pic"></img>
                        <h5 className="col-md-6 col-12">Luke Allen</h5>
                        <p>
                        As a back end developer, he hopes to build scalable systems that are efficiently built and help to improve people’s lives.
                        </p>
                    </div> */}
                </div>
            </section>
        )
    }
}