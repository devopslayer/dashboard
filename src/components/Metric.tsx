import React, { useState } from 'react';
import "../App.css"
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend
);

function Metric() {
  const orderCount = 394;
  const orderVal = 80;
  const trackingVal = 44;

  // For Doughnut Chart
  const labels = ['Delivered', 'Out for delivery', 'Intransit', 'Pending', 'Exception'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'No of Orders',
      data: [40, 5, 15, 20, 30],
      backgroundColor: [
        'rgb(255,200,121)', //rgba(255,200,121,255) Delivered
        'rgb(255,221,182)', //rgba(255,221,182,255) Out of delivery
        'rgb(149,111,0)', //rgba(149,111,0,255) Intransit
        'rgb(229,165,0)', //rgba(229,165,0,255) Pending
        'rgb(94,66,0)' //rgba(94,66,0,255) Exception
      ],
      hoverOffset: 4
    }],
    options: {
      responsive: true
    }
  });

  // plugins: {
  //   legend: {
  //     position: "bottom",
  //     labels: {
  //       usePointStyle: true //for style circle
  //     }
  //   }
  // },

  // setData({
  //   ...data,
  //   datasets: [{
  //     ...data.datasets[0],
  //     data: [30, 15, 15, 25, 15]
  //   }]
  // });

  return (
    <>
      <div className='bg-metric'>
        <h3 className='fw-bolder my-2 mx-4'>
          Instant Dive into Your Performance Metrics
        </h3>

        <ul className="nav nav-pills fw-bold my-4 mx-3">
          <li className="nav-item mx-2">
            <a className="nav-link text-bg-light border border-2 border-success-subtle active" aria-current="page" href="#">Lifetime</a>
          </li>

          <li className="nav-item mx-2">
            <a className="nav-link text-bg-light" aria-current="page" href="#">Last Week</a>
          </li>

          <li className="nav-item mx-2">
            <a className="nav-link text-bg-light" aria-current="page" href="#">Last Month</a>
          </li>

          <li className="nav-item mx-2">
            <a className="nav-link text-bg-light" aria-current="page" href="#">Last Year</a>
          </li>

          <li className="nav-item mx-2">
            <a className="nav-link text-bg-light" aria-current="page" href="#">
              Customize Time Line
              <i className="bi bi-calendar mx-2"></i>
            </a>
          </li>
        </ul>

        <div className="row my-4 mx-3">
          <div className="col-md-12 col-lg-4 col-sm-3 my-2 card-color-0">
            <div className="card text-bg-light">
              <div className="card-block">
                <h5 className="card-title my-2 mx-4">Shipment Updates <span className='fnt-left'>Total Orders: {orderCount}</span></h5>
                <div className="card-body">
                  <div className='bg-metric-ul'>
                    <ul className="list-group list-group-horizontal fw-bold overflow-scroll">
                      <li className="list-group-item list-group-item-size p-0 mx-2">
                        <a className="btn bg-metric-btn bg-metric-btn-active" aria-current="page" href="#">Delivered</a>
                      </li>

                      <li className="list-group-item list-group-item-size p-0 mx-2">
                        <a className="btn bg-metric-btn" aria-current="page" href="#">Out for delivery</a>
                      </li>

                      <li className="list-group-item list-group-item-size p-0 mx-2">
                        <a className="btn bg-metric-btn" aria-current="page" href="#">Intransit</a>
                      </li>

                      <li className="list-group-item list-group-item-size p-0 mx-2">
                        <a className="btn bg-metric-btn" aria-current="page" href="#">Pending</a>
                      </li>

                      <li className="list-group-item list-group-item-size p-0 mx-2">
                        <a className="btn bg-metric-btn" aria-current="page" href="#">Exception</a>
                      </li>
                    </ul>
                  </div>
                  <div className='chart'>
                    <Doughnut data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 col-sm-3 my-2 card-color">
            <div className="card card-color-1">
              <div className="card-block">
                <h4 className="card-title my-2 mx-4">Star Facts about your orders!!!</h4>
                <p className="card-text my-2 mx-4">
                  There are 8 shipments that have been in out for delivery for more than 3 days.
                </p>
                <p className="card-text my-2 mx-4">
                  There are 5 shipments in exception right now.
                </p>
                <p className="card-text my-2 mx-4">
                  The maximum chargebacks are from Miami.
                </p>
              </div>
            </div>
            <button className="btn btn-light btn-outline-dark my-2 mx-4">Check Orders Page</button>
          </div>

          <div className="col-md-12 col-lg-4 col-sm-3 mx-3 my-2 p-0 text-bg-light">
            <div className="card text-bg-light card-color-2">
              <div className="card-block">
                <h4 className="card-title my-2 mx-4">Tracking Page Views Vs Orders</h4>
                <p className="card-text my-2 mx-4">
                  Understand user engagement patterns and optimize your tracking page for enhanced cuatomer experiences.
                </p>
              </div>
              <div className="card-block my-2 mx-4 card-color-3">
                <h6 className="card-title my-1 mx-2">Orders</h6>
                <div className='card-body my-1 mx-2'>
                  <h3>{orderVal} <i className="bi bi-inbox pan-left"></i></h3>
                </div>
              </div>
              <div className="card-block  my-2 mx-4 card-color-4">
                <h6 className="card-title my-1 mx-2">Tracking Page Views</h6>
                <div className='card-body my-1 mx-2'>
                  <h3>{trackingVal} <i className="bi bi-eye pan-left"></i></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Metric;
