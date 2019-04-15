import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return(
            <section id="about">
                <div className="first container">
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
                        
                    </div>
                </div>
                <div className="second">
                    <div>
                        <h1>
                            87-94% of individuals do not report <br/> harassment to their HR Departments.
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Only 20% of companies have made systemic change to end harassment.
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