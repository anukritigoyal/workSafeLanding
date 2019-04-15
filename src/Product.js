import React, { Component } from 'react'
import second from './img/second.jpg'

export default class About extends Component {
    render() {
        return(
            <section id="product">
                <div className="fourth">
                    <div className="col">
                        <img src={second} className="first-img"></img>
                    </div>
                    <div className="col">
                        <h1>Product</h1>
                        <p>
                        Our solution is an enterprise wide reporting system that allows employees to privately report any identity 
                        based harassment or generalized aggressive behavior. Both HR personnel and reporters can track how their report 
                        is being processed via this tool, adding a layer of accountability that was not present prior to this tool.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}