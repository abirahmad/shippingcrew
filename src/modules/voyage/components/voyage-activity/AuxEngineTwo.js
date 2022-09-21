import React from "react";
import { Form, Button } from "react-bootstrap";
const AuxEngineTwo = (props) => {
  return (
    <form
      className="form form-label-right voyageEngineerForm pl-5"
      method="post"
    >
      <div>
        <p className="text-uppercase text-bold mt-3">Aux.Engine 2</p>
      </div>
      <div className="border-bottom"></div>
      <div className="form-group row mt-2">
        <div className="col-xl-3 col-lg-3 col-6">
          <Form.Group>
            <Form.Label>R/H</Form.Label>
            <Form.Control type="text" placeholder="Type" />
          </Form.Group>
        </div>
        <div className="col-xl-3 col-lg-3 col-6">
          <Form.Group>
            <Form.Label>Load (KW)</Form.Label>
            <Form.Control type="text" placeholder="Type" />
          </Form.Group>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-lg-3">
          <p className="mt-3">Aux Temp.</p>
        </div>
        <div className="col-lg-3">
          <div className="minInput">
            <Form.Group>
              <Form.Control type="number" placeholder="MIN" />
            </Form.Group>
          </div>
          <div className="maxInput">
            <Form.Group>
              <Form.Control type="number" placeholder="MAX" />
            </Form.Group>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          <p className="mt-3">Aux Temp.</p>
        </div>

        <div className="col-lg-2">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-lg-3">
          <p className="mt-3">Jacket Temp</p>
        </div>

        <div className="col-lg-3">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-2">
          <p className="mt-3">Jacket Pressure.</p>
        </div>

        <div className="col-lg-2">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-lg-3">
          <p className="mt-3">SCAV</p>
        </div>

        <div className="col-lg-3">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-2">
          <p className="mt-3">SCAV Pressure</p>
        </div>

        <div className="col-lg-2">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
      </div>
      <div className="row mt-1 ">
        <div className="col-lg-3">
          <p className="mt-3">Lub Oil Temp</p>
        </div>

        <div className="col-lg-3">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-2">
          <p className="mt-3">Lub Oil Pressure</p>
        </div>

        <div className="col-lg-2">
          <Form.Group>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
        </div>
      </div>
      <div className=" mt-5">
        <Button
          className="col-xl-2 col-lg-2 col-4  ml-5 float-left text-white AuxEngineBackBtn"
          variant="secondary"
        >
          Back
        </Button>
        <Button
          className="col-xl-2 col-lg-2 col-4 ml-5  float-right"
          variant="primary"
        >
          Next
        </Button>
      </div>
      <div className="clearfix"></div>
    </form>
  );
};

export default AuxEngineTwo;
