import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { userSchema } from "./Validations/UserValidations";

class Register extends Component {
  
    render() {

      const createUser = async (event) => {
        event.preventDefault()
        let formData = {
          name: event.target[0].value,
          email: event.target[1].value,
          phoneNumber: event.target[2].value,
          password: event.target[3].value,
        };
        const isValid = await userSchema.isValid(formData);
        

        if(isValid == true) {
          this.props.history.push("/apphome");
      }
      else {
          alert('First Login');
      }
        
      }
        
        return (
            <div className="register-page">
                <div class="login-box">
  <div class="login-logo">
    <a href="#" class="text-success"><b><Link to="/register">SUWAIBATsub</Link></b></a>
  </div>

  {/* login-logo */}

  
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Register to start your session</p>

      <form action="/register" onSubmit={createUser}>

        
        
                        <label for="exampleInputEmail1">Full Name</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Full Name" name="full_name" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>

                <label for="exampleInputEmail1">Email address</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Email" name="email_address" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>

                <label for="exampleInputEmail1">Phone Number</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Phone Number" name="phone_number" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-phone"></span>
            </div>
          </div>
        </div>


                <label for="exampleInputEmail1">Password</label>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" name="password" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>

        <div class="row">
           <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div> 
          
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Register Now!</button>
          </div>
          
        </div>
      </form>
            
      {/* social-auth-links */}
      

      <p class="mb-0">
        <a href="#" class="text-center"><Link to="/login">Login</Link></a>
      </p>
    </div>

    {/* login-card-body */}
    
  </div>
</div>
            </div>
        )
    }
}


export default Register;