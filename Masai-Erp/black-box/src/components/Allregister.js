import React from 'react';
import {Link} from 'react-router-dom';

export default class Allregister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-3 col-md-4 ">
                            <div className="card card1" style={{ height: "18rem" }}>
                                <div className="card-body">
                                    <h1 className="register-head">Register as mentor</h1>
                                    <div className="go-corner">
                                        <div className="go-arrow"> -></div>
                                    </div>
                                    <div class="middle">
                                       <div class="text">
                                           <Link to='/mentor'><div>click me</div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-md-4">
                            <div className="card card1" >
                                <div className="card-body">
                                    <h1 className="register-head">Register as Current Student</h1>
                                    <div className="go-corner">
                                        <div className="go-arrow"> -></div>
                                    </div>
                                    <div class="middle">
                                       <div class="text">
                                       <Link to='/current'><div>click me</div></Link>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-md-4">
                            <div className="card card1">
                                <div className="card-body">
                                    <h1 className="register-head">Register as Placed Student</h1>
                                    <div className="go-corner">
                                        <div className="go-arrow"> -></div>
                                    </div>
                                    <div class="middle">
                                        <div class="text">
                                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}