import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return(
            <footer className="border-top mt-5 pt-3">
                <div className="d-flex row">
                    <div className="col-md">
                        <small>Copyright 2019 University of Washington iSchool</small>
                    </div>
                    <div className="col-md contact">
                        <p>Contact Us</p>
                        <a href="mailto:arp32@uw.edu" aria-label="send email"><i class="fas fa-envelope"></i></a>
                    </div>

                    
                </div>
            </footer>
        )
    }
}