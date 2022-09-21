import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Image } from "react-bootstrap";
import akijShip from "../images/akijShip.png";
import box from "../images/box.png";
import portSign from "../images/portSign.png";
import calender from "../images/calender.png";
import metroShip from "../images/metroShip.png";

import "../css/style.css";
import "../css/responsive.css";
import VoyageActivityCreateOfficer from "./voyage-activity/VoyageActivityCreateOfficer";
import VoyageActivityCreateEngineer from "./voyage-activity/VoyageActivityCreateEngineer";
import AuxEngineOne from "./voyage-activity/AuxEngineOne";
import AuxEngine from "./voyage-activity/AuxEngine";
import Boiler from "./voyage-activity/Boiler";

const VoyageActivityCreate = withRouter(({ history, props }) => {
  return (
    <>
      <div className="container">
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <div className="card-title">
              <h3 class="card-label">Voyage Activity- Create</h3>
            </div>
          </div>
          <div className="card-body">
            <div className="card card-custom gutter-b">
              <div className="row voyageActivityCreate">
                <div className="col-xl-2 col-lg-2 col-md-4  mb-3 col-5">
                  <Image className="float-left ml-2 akijShip " src={akijShip} />
                  <p className="float-left ml-2 akijNoor">Akij Noor</p>
                </div>
                <div className="clearfix"></div>
                {/* <div className=" border-right pb-5"></div> */}

                <div className="col-xl-3 col-lg-3 col-md-4 col-7 border-left">
                  <Image className="float-left mr-3   metroShip" src={box} />
                  <p className="float-left  ">Cargo Type- Cargo Qty</p>
                </div>
                <div className="clearfix"></div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-6 mb-3">
                  <Image className="float-left   " src={portSign} />
                  <p className="float-left akijNoor ml-2">Port From- Port To</p>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-1 border-right"></div>

                <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                  <Image className="float-left   metroShip" src={metroShip} />
                  <p className="float-left akijNoor ml-2">Voyage No #123</p>
                </div>
                <div className="clearfix"></div>

                <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                  <Image className="float-left   metroShip" src={calender} />
                  <p className="float-left akijNoor ml-2">05 Sep 2020</p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <form className="form form-label-right" method="post">
              <div className="form-group row">
                <div className="col-lg-4">
                  <label className="form-label">Ship Position</label>
                  <Form.Control as="select">
                    <option>Search and select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </div>
                <div className="col-lg-4">
                  <label className="form-label"> Date</label>
                  <Form.Control
                    type="date"
                    placeholder="Enter Result "
                    name="fromDate"
                    className="fromStyle"
                  />
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Condition</label>
                  <Form.Control as="select">
                    <option>Search and select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </div>
              </div>
            </form>

            <VoyageActivityCreateOfficer />

            <VoyageActivityCreateEngineer />
          </div>
        </div>
      </div>
    </>
  );
});

export default VoyageActivityCreate;
