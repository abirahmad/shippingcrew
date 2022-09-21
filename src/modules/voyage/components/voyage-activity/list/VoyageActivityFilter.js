import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetVoyageActivityList } from "../../../_redux/actions/VoyageActivityAction";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { GetVoyageList } from "../../../_redux/actions/VoyageAction";
import { GetVesselList } from "../../../../vessel/_redux/actions/VesselAction";

const VoyageActivityFilter = (props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [voyage, setVoyage] = useState("");
  const [vessel, setVessel] = useState("");
  const [type, setType] = useState("");
  const { register, handleSubmit, errors, setValue } = useForm();
  const voyageIDList = useSelector((state) => state.voyageInfo.voyageIDList);
  const vesselListOptions = useSelector(
    (state) => state.vesselInfo.vesselListOptions
  );



  const changeVessel = (option) => {
    setVessel(option);
    setVoyage("");
    dispatch(GetVoyageActivityList(search, voyage.value, option.value));
    dispatch(GetVoyageList("", "", option.value));
  }

  const changeSearch = (value) => {
    setSearch(value);
    dispatch(GetVoyageList(value, type));
    console.log(value);

  };

  useEffect(() => {
    dispatch(GetVesselList());
    // dispatch(GetVoyageList());
  }, []);


  return (
    <form className="form form-label-right" method="post">
      <div className="form-group row ml-2">
        <div className="col-lg-3 col-md-6 col-10">
          <Form.Label className="mt-2">Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              changeSearch(e.target.value);
            }}
          />
        </div>
        {/* <div className="col-lg-3 col-md-6 col-10">
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label>Vessel</Form.Label>
            <Col sm="9" className="mt-10">
              <Select
                options={vesselListOptions}
                value={vessel}
                onChange={(option) => changeVessel(option)} />
            </Col>
          </Form.Group>
        </div> */}

        <div className="col-lg-3 col-md-6 col-10">
          <Form.Group controlId="formPlaintextPassword">
            <Form.Label className="mt-2">Select Vessel</Form.Label>
            <Col sm="9">
              <Select
                options={vesselListOptions}
                value={vessel}
                onChange={(option) => changeVessel(option)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="col-lg-3 col-md-6 col-10">
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label className="mt-2">Select Voyage</Form.Label>
            <Col sm="9">
              <Select
                options={voyageIDList}
                value={voyage}
                onChange={(option) => {
                  setVoyage(option);
                  dispatch(
                    GetVoyageActivityList(search, option.value, vessel.value)
                  );
                }}
              />
            </Col>
          </Form.Group>
        </div>
      </div>
    </form>
  );
};

export default VoyageActivityFilter;
