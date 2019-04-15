import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        return(
            <section id="team">
                <h1>Our Team</h1>
                <div className="row team-row"></div>
                    <div className="row col-xl-6 col-md-12 p-0 mr-0 ml-0">
                        {/* <img src={ally} className="col-md-6 col-12"></img> */}
                        <h5 className="col-md-6 col-12">Ally Picker</h5>
                        <p>
                        With a love of design and innovative product development, she enjoys 
                        learning new methods for solving old problems as well as using technology to 
                        advocate for others.
                        </p>
                    </div>

                    <div className="row col-xl-6 col-md-12 p-0 mr-0 ml-0">
                        {/* <img src={anukriti} className="col-md-6 col-12"></img> */}
                        <h5 className="col-md-6 col-12">Anukriti Goyal</h5>
                        <p>
                            Her passion lies in the power of data science to change processes and bring people together.
                        </p>
                    </div>

                    <div className="row col-xl-6 col-md-12 p-0 mr-0 ml-0">
                        {/* <img src={sagar} className="col-md-6 col-12"></img> */}
                        <h5 className="col-md-6 col-12">Sagar Surana</h5>
                        <p>
                            An avid software developer, he loves finding and solving unique problems using technology.
                        </p>
                    </div>

                    <div className="row col-xl-6 col-md-12 p-0 mr-0 ml-0">
                        {/* <img src={luke} className="col-md-6 col-12"></img> */}
                        <h5 className="col-md-6 col-12">Luke Allen</h5>
                        <p>
                        As a back end developer, he hopes to build scalable systems that are efficiently built and help to improve people’s lives.
                        </p>
                    </div>
            </section>
        )
    }
}