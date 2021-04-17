import React, { Component } from "react";
import moneyHome from "../images/moneyHome.jpg";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Content">
        <div className="TextBox">
          <h2>Welcome To <br/><span>TSF BANK</span></h2>
          <h5><strong>Basic Banking System</strong></h5>
          <p>It is a simple dynamic website in which one can see all the customers and their details and their current amount. We can also send amount from one customer to another customer and can also see their transaction history.</p>
          <p>©2021 Made by <strong>Rahul Kumar Verma</strong></p>
          
        </div>
        <div className="Imgbox">
            <img src={moneyHome} alt="money" className="Money"/>
        </div>
      </div>
    );
  }
}

export default Home;
