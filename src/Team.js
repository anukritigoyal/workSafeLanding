import React, { Component } from 'react'
import ally  from './img/ally.jpg'
import anukriti from './img/anukriti.jpeg'
import sagar from './img/sagar.jpeg'
import luke from './img/luke.jpg'

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
                                Project Manager
                            </p>
                        </div>
                    </div>

                    <div className="profile">
                        <img src={anukriti} className="profile-pic" alt="anukriti"></img>
                        <div className="profile-text">
                            <h5 className="">Anukriti Goyal</h5>
                            <p>
                                Developer
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
                                Developer
                            </p>
                        </div>
                    </div>

                    <div className="profile">
                        <img src={luke} className="profile-pic" alt="luke"></img>
                        <div className="profile-text">
                            <h5 className="">Luke Allen</h5>
                            <p>
                                Developer
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}