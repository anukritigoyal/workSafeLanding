import React, { Component } from 'react'
import first from './img/first.jpg'

export default class About extends Component {
    render() {
        return(
            <section id="about">
                <div className="first">
                    <div className="col">
                        <h1>
                            A comprehensive workplace harassment reporting tool
                        </h1>
                        <p>
                            Harassment in the workplace has increased over the past decade despite continued efforts to implement inclusive policies 
                            and practices. One aspect of this is company’s failure to implement efficient reporting mechanisms that instill confidence 
                            that they will diligently evaluate and exact justice for any given report.
                        </p> 
                    </div>
                    <div className="col">
                        <img src={first} alt="computer" className="first-img"></img>
                    </div>
                </div>
                <div className="second">
                    <div>
                        <h1 className="stat1">
                            87-94% of individuals <br /> do not report harassment <br/> to their HR Departments.
                        </h1>
                    </div>
                    <div>
                        <h1 className="stat2">
                            Only 20% of companies <br/> have made systemic <br/> change to end harassment.
                        </h1>
                    </div>
                </div>
                <div className="third">
                    <h1>
                        Why are people not reporting?
                    </h1>
                    <div className="cols">
                        <div className="circles">
                            <div className="circle">Lack of support</div>
                        </div>

                        <div className="circles">
                            <div className="circle">Fear of Retaliation</div>
                        </div>

                        <div className="circles">
                            <div className="circle">Unclear processes</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}