import React from "react";
import image2 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/lendsqr.png";
import "./login.css";

function Login() {

  function passwordHandler(){
      let x = document.getElementById("show");
      let y = document.getElementById("password");

      if(y.type === "password"){
          x.innerHTML = "Hide";
          y.type = "text"
      }else{
          x.innerHTML = "Show";
          y.type = "password";
      }
  }

  return (
    <div className="container">
      <div className="logo-container">
        <img src={image2} className="image2" alt=""/>
      </div>

      <div className="picture"></div>

      <section className="header-container">
        <h3>Welcome</h3>
        <p>Enter details to login.</p>

        <form>
          <input
            type="email"
            id="email"
            className="input1"
            placeholder="Email"
          />

          <div className="password-container">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input2"
            />
            <p id="show" onClick={passwordHandler}>
              Show
            </p>
          </div>

          <a href="">Forgot Password?</a>
          <input type="submit" value="LOG IN" className="submit" />
        </form>
      </section>
    </div>
  );
}

export default Login;
