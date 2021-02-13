import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { loginSchema } from "./Validations/LoginValidations";


class Login extends Component {
    render() {

        const loginUser = async (event) => {
            event.preventDefault()
            let formData = {
              email: event.target[0].value,
              password: event.target[1].value,
            };

            const isValid = await loginSchema.isValid(formData);
            


            if(isValid == true) {
                this.props.history.push("/apphome");
            }
            else {
                alert('First Login');
            }
          }


        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="https://samicsub.com/user/Login" className="text-success"><b><Link to="/login">SUWAIBATsub</Link></b></a>
                    </div>
                
                    {/* login-logo */}

                    <div className="card">
                        <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="/login" onSubmit={loginUser}>

                            
                            
                            
                                    <label for="exampleInputEmail1">Email address/Phone Number</label>
                            <div className="input-group mb-3">
                            
                            <input type="text" id="email_address" className="form-control" placeholder="Email or Phone Number" name="email_address" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                            </div>

                                    <label for="exampleInputEmail1">Password</label>
                            <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name="password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-lock"></span>
                                </div>
                            </div>
                            </div>

                            <div className="row">
                             <div className="col-8">
                                <div className="icheck-primary">
                                <input type="checkbox" id="remember" />
                                <label for="remember">
                                    Remember Me
                                </label>
                                </div>
                            </div> 
                            
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-block">Login Now!</button>
                            </div>
                            
                            </div>
                        </form>
                    

                                               <p className="mb-1">
                            <a href="#">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="#" className="text-center"><Link to="/register">Register</Link></a>
                        </p>
                        </div>
                        {/* login-card-body */}
                    </div>
                    </div>
            </div>
        )
    }
}


export default  Login;