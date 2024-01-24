import React from 'react';
import "../App.css";
import { useState, useEffect } from 'react';
import Paypal from "../Images/Paypal-Logo.png";
import Star from "../Images/Star-Logo.png";
import Bolt from "../Images/Bolt-Logo.png";
import Network from "../Images/Network-Logo.png";
import Connection from "../Images/Connection-Logo.png";

function Functionality() {
  const [input, setInput] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const useColor = { input, input1, input2 };

  return (
    <>
      <div className='bg-func text-bg-light my-5'>
        <h3 className='fw-bolder my-2 mx-4'>
          Discover the Heart of Our Functionality
        </h3>

        <div className="row mx-2 my-4">
          <div className="col-md-12 col-lg-4 col-sm-3 card-width-c card-color-5">
            <div className="card card-color-2">
              <div className="card-block">
                <h4 className="card-title my-2 mx-4">Elevate your Brand Aesthetics with Custom Tracking Page Styles</h4>
                <p className="card-text my-2 mx-4">
                  Immerse yourbcustomers in a branded experience by personalizing the colors on your tracking page.
                </p>
                <div className='card-body my-2 mx-4'>
                  <div className="mb-3">
                    <label htmlFor="formAccentSm" className="form-label">Accent Color</label>
                    <div className="row">
                      <div className="col-4">
                        <input className="form-control form-control-sm textColor" id="formAccentSm" type="text" placeholder='Hex value #2d2d2d' value={input} onInput={e => setInput((e.target as HTMLInputElement).value)} maxLength={7} />
                      </div>
                      <div className='col-4 mx-5'>
                        <div className="form-control form-control-sm divColor" style={{ 'backgroundColor': useColor.input }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="formTextSm" className="form-label">Text Color</label>
                    <div className='row'>
                      <div className='col-4'>
                        <input className="form-control form-control-sm textColor" id="formTextSm" type="text" placeholder='Hex value #2d2d2d' value={input1} onInput={e => setInput1((e.target as HTMLInputElement).value)} maxLength={7} />
                      </div>
                      <div className='col-4 mx-5'>
                        <div className="form-control form-control-sm divColor" style={{ 'backgroundColor': useColor.input1 }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="formBgSm" className="form-label">Background Color</label>
                    <div className='row'>
                      <div className='col-4'>
                        <input className="form-control form-control-sm textColor" id="formBgSm" type="text" placeholder='Hex value #2d2d2d' value={input2} onInput={e => setInput2((e.target as HTMLInputElement).value)} maxLength={7} />
                      </div>
                      <div className='col-4 mx-5'>
                        <div className="form-control form-control-sm divColor" style={{ 'backgroundColor': useColor.input2 }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-light btn-outline-dark my-2 mx-4">Preview</button>
                <button className="btn btn-dark my-2">Apply Colors</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-2 col-sm-1">
            {/* card1 */}
            <div className="card card-width card-color-2">
              <div className="card-block">
                <h4 className="card-title my-2 mx-4">Exclusive Onboarding Support for High-Volume Brands</h4>
                <p className="card-text my-2 mx-4">
                  Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.
                </p>
                <button className="btn btn-dark my-2 mx-4">Schedule A Call</button>
              </div>
            </div>

            {/* card2 */}
            <div className="card my-2 card-width card-color-2">
              <div className="card-block">
                <h4 className="card-title my-2 mx-4">Explore our Integrated Ecosystem</h4>
                <p className="card-text mx-4">
                  Discover a variety of popular integration tailored for your convenience.
                </p>
                <div className='card-body mx-2'>
                  <div className="list-group list-group-horizontal p-0">
                    <div className="list-group-item mx-2 mx-2 p-0">
                      <img className="card-img imgCursor" src={Paypal} alt="Paypal" />
                    </div>
                    <div className="list-group-item mx-2 p-0">
                      <img className="card-img imgCursor" src={Star} alt="Star" />
                    </div>
                    <div className="list-group-item mx-2 p-0">
                      <img className="card-img imgCursor" src={Bolt} alt="Bolt" />
                    </div>
                    <div className="list-group-item mx-2 p-0">
                      <img className="card-img imgCursor" src={Network} alt="Network" />
                    </div>
                    <div className="list-group-item mx-2 p-0">
                      <img className="card-img imgCursor" src={Connection} alt="Connection" />
                    </div>
                  </div>
                </div>
                <button className="btn btn-dark mx-4 my-1">Explore Integrations</button>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 col-sm-3 card-margin card-color-5">
            <div className="card card-color-2">
              <div className="card-block">
                <h4 className="card-title my-2 mx-4">Seamlessly Integrate Custom HTML Elements</h4>
                <p className="card-text my-2 mx-4">
                  Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.
                </p>
                <div className='card-body my-2 mx-4'>
                  <div className='mb-3'>
                    <label htmlFor="formHTMLSm" className="form-label">HTML Link</label>
                    <textarea className="form-control" id="formHTMLSm" placeholder='Value' rows={6}></textarea>
                  </div>
                  <button className="btn btn-light btn-outline-dark my-2 mx-2">Preview</button>
                  <button className="btn btn-dark my-2">Apply Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Functionality;
