import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Boiler from "./Boiler";
const NoonReportDetails = (props) => {
  const [key, setKey] = useState("BunkerVLSFO");
  return (
    <div className="container">
      <div className="card card-custom p-5">
        <div className="">
          <div className="">
            <h3 class="">Details</h3>
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col-xl-4 col-lg-4 col-6">
            <p>Vessel Name</p>
            <h6>Akij Noor</h6>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>Date</p>
            <h6>DD/MM/YY</h6>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>Condition</p>
            <h6>Search and Select</h6>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xl-4 col-lg-4 col-6">
            <p>R.P.M</p>
            <h6>Search and Select</h6>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>Engine Speed</p>
            <h6>Search and Select</h6>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>Slip(%)</p>
            <h6>DD/MM/YY</h6>
          </div>
        </div>
      </div>
      <div className="card card-custom p-5 mt-5">
        <div className="noonReportTab">
          <Tabs
            defaultActiveKey="BunkerVLSFO"
            transition={false}
            id="noanim-tab-example"
            variant="pills"
            className="bg-light"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="BunkerVLSFO" title="Bunker VLSFO"></Tab>
            <Tab eventKey="MainEngine " title="Main Engine">
              {/* <p>hi</p> */}
            </Tab>
            <Tab eventKey="ExhtEngine 1" title="Exht. Engine 1">
              {/* <p>hlw</p> */}
            </Tab>
            <Tab eventKey="ExhtEngine 2" title="Exht. Engine 2"></Tab>
            <Tab eventKey="ExhtEngine 3" title="Exht. Engine 3"></Tab>
            <Tab eventKey="Boiler" title="Boiler"></Tab>
            <Tab
              eventKey="Gas and Chemical's Consumption"
              title="Gas and Chemical's Consumption"
            ></Tab>
          </Tabs>
        </div>
        <div>
          <p className="text-uppercase text-bold mt-4">Time at Sea</p>
          <div className="border-bottom"></div>
        </div>
        <div className="row mt-3">
          <div className="col-xl-4 col-lg-4 col-6 pb-3">
            <p>CON</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6 pb-3">
            <p>RCVD/ADJ</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>ROB</p>
            <p className="text-bold">Type</p>
          </div>
        </div>
        <p className="mt-2 text-bold text-uppercase mt-3">Bunker LSMGO</p>
        <div className="border-bottom"></div>
        <div className="row mt-3">
          <div className="col-xl-4 col-lg-4 col-6  pb-3">
            <p>CON</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6  pb-3">
            <p>RCVD/ADJ</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>ROB</p>
            <p className="text-bold">Type</p>
          </div>
        </div>
        <p className="mt-2 text-bold text-uppercase mt-3">LUb oil MEcc</p>
        <div className="border-bottom"></div>
        <div className="row mt-3">
          <div className="col-xl-4 col-lg-4 col-6  pb-3">
            <p>CON</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6  pb-3">
            <p>RCVD/ADJ</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>ROB</p>
            <p className="text-bold">Type</p>
          </div>
        </div>
        <p className="mt-2 text-bold text-uppercase mt-3">LUb oil AEcc</p>
        <div className="border-bottom"></div>
        <div className="row mt-3">
          <div className="col-xl-4 col-lg-4 col-6  pb-3">
            <p>CON</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6  pb-3">
            <p>RCVD/ADJ</p>
            <p className="text-bold">Type</p>
          </div>
          <div className="col-xl-4 col-lg-4 col-6">
            <p>ROB</p>
            <p className="text-bold">Type</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoonReportDetails;
