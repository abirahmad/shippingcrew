import React, { useState } from "react";
import { Form, Button, Tab, Tabs } from "react-bootstrap";
import "../../css/style.css";
import AuxEngine from "./AuxEngine";
import AuxEngineOne from "./AuxEngineOne";
import AuxEngineThree from "./AuxEngineThree";
import AuxEngineTwo from "./AuxEngineTwo";
import Boiler from "./Boiler";
import BunkerVlsfo from "./BunkerVlsfo";

const VoyageActivityCreateEngineer = (props) => {
  const [key, setKey] = useState("BunkerVLSFO");
  return (
    <form className="form form-label-right voyageEngineerForm" method="post">
      <div className="form-group row">
        <div className="col-lg-4">
          <Form.Group>
            <Form.Label>R.P.M</Form.Label>
            <Form.Control type="text" placeholder="Type" />
          </Form.Group>
        </div>
        <div className="col-lg-4">
          <Form.Group>
            <Form.Label>Engine Speed</Form.Label>
            <Form.Control type="text" placeholder="Type" />
          </Form.Group>
        </div>

        <div className="col-lg-4">
          <Form.Group>
            <Form.Label>Slip(%)</Form.Label>
            <Form.Control type="text" placeholder="Type" />
          </Form.Group>
        </div>
      </div>
      <div className="card card-custom gutter-b">
        <div className="card-body">
          <div className="col-10 voyageEngineerTab">
            <Tabs
              defaultActiveKey="BunkerVLSFO"
              transition={false}
              id="noanim-tab-example"
              variant="pills"
              className="bg-light"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="BunkerVLSFO" title="Bunker VLSFO">
                <BunkerVlsfo />
              </Tab>
              <Tab eventKey="AuxEngine 1" title="Aux. Engine 1">
                <AuxEngineOne />
                <AuxEngine />
              </Tab>
              <Tab eventKey="AuxEngine 2" title="Aux. Engine 2">
                <AuxEngineTwo />
              </Tab>
              <Tab eventKey="AuxEngine 3" title="Aux. Engine 3">
                <AuxEngineThree />
              </Tab>
              <Tab eventKey="Boiler" title="Boiler">
                <Boiler />
              </Tab>
            </Tabs>
          </div>

          <Button
            className="col-xl-2 col-lg-2 col-4 ml-5 float-right"
            variant="primary"
          >
            Next
          </Button>
          <div className="clearfix"></div>
        </div>
      </div>
    </form>
  );
};

export default VoyageActivityCreateEngineer;
