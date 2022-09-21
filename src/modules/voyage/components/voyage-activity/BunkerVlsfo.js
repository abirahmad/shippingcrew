import React from "react";
import { Form, Button } from "react-bootstrap";
const BunkerVlsfo = (props) => {
  return (
    <>
      <form
        className="form form-label-right voyageEngineerForm pl-5"
        method="post"
      >
        <div className="mt-5 ">
          <p className="text-uppercase text-bold mt-3">Time at sea</p>
        </div>
        <div className="border-top"></div>
        <div className="form-group row ">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>CON</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>RCVD/ADJ</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>ROB</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
        </div>

        <div>
          <p className="text-uppercase text-bold ">BUNKER LSMGO</p>
        </div>
        <div className="border-top"></div>
        <div className="form-group row mt-1 ">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>CON</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>RCVD/ADJ</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>ROB</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
        </div>

        <div>
          <p className="text-uppercase text-bold ">LUB OIL MECC</p>
        </div>
        <div className="border-top"></div>
        <div className="form-group row mt-1">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>CON</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>RCVD/ADJ</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>ROB</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
        </div>
        <div>
          <p className="text-uppercase text-bold ">LUB OIL AECC</p>
        </div>
        <div className="border-top"></div>
        <div className="form-group row mt-1">
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>CON</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>RCVD/ADJ</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
          <div className="col-lg-4">
            <Form.Group>
              <Form.Label>ROB</Form.Label>
              <Form.Control type="text" placeholder="Type" />
            </Form.Group>
          </div>
        </div>
      </form>
    </>
  );
};

export default BunkerVlsfo;
