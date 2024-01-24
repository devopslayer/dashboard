import React from 'react';
import "../App.css";

function Hero() {
  const userName = "John Mathew";
  return (
    <>
      <div className='bg-hero'>
        <h2 className="fw-bolder my-4 mx-4">Welcome, {userName}!!</h2>
        <div className="rCard">
          <div className="card mx-2 cardSize text-bg-light">
            <div className="card-body">
              <h5 className="card-title">Order Sync Successful!</h5>
              <p className="card-text">Your order details from the last 30 days have been successfully synced. Check them out now!</p>
              <button className="btn btn-dark">Explore Your Orders</button>
            </div>
          </div>

          <div className="card mx-2 cardSize text-bg-warning">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-exclamation-triangle mx-2"></i>
                Customize Customer Notification
              </h5>
              <p className="card-text">Tailor your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
              <button className="btn btn-dark">Configure Notifications</button>
            </div>
          </div>

          <div className="card mx-2 cardSize text-bg-info">
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-exclamation-circle mx-2"></i>
                Your Tracking Link has been generated
              </h5>
              <p className="card-text">
                Include the <a href="#" className='card-link'>Link</a> to Your Store's Navigation Menu.
              </p>
              <button className="btn btn-light btn-outline-dark my-3 mx-2">Copy Link</button>
              <button className="btn btn-dark my-3">Go To Navigation Menu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
