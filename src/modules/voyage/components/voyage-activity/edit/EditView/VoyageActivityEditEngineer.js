import React from "react";
import { useState } from "react";
import { Form, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  GetVoyageActivityDetailForEdit,
  handleChangeVoyageActivityCreateInput,
} from "../../../../_redux/actions/VoyageActivityAction";
import AuxEngine2Edit from "../EditComponents/AuxEngine2Edit";
import BoilerEdit from "../EditComponents/BoilerEdit";
import BunkerVLSFOEdit from "../EditComponents/BunkerVLSFOEdit";
import AuxEngine1Edit from "../EditComponents/AuxEngine1Edit";
import AuxEngine3Edit from "../EditComponents/AuxEngine3Edit";
import { generateNewDate } from "../../../../../master/utils/DateHelper";
// import "../../../css/style.css";

const VoyageActivityEditEngineer = (props) => {
  const { id, activityID } = props;
  console.log('props', props);
  
  const { register, handleSubmit, errors, setValue } = useForm();
  const dispatch = useDispatch();
  const voyageActivityCreateInput = useSelector(
    (state) => state.voyageActivityInfo.voyageActivityCreateInput
  );

  const handleChangeTextInput = (name, value) => {
    dispatch(handleChangeVoyageActivityCreateInput(name, value));
  };

  const voyageActivityDetail = useSelector(
    (state) => state.voyageActivityInfo.voyageActivityDetail
  );

  useEffect(() => {
    dispatch(GetVoyageActivityDetailForEdit(activityID));
  }, []);

  const [activeKey, setActiveKey] = useState(1);

  const handleSelected = (key) => {
    setActiveKey(key);
  };
  return (
    <form className="form form-label-right voyageEngineerForm" method="post">
      <div className="form-group row">
        <div className="col-lg-4">
          <label className="form-label">Ship Position</label>
          <Form.Control
            as="select"
            name="positionSelected"
            value={voyageActivityCreateInput.positionSelected}
            onChange={(e) =>
              handleChangeTextInput("positionSelected", e.target.value)
            }
          >
            <option value="">Select Position</option>
            <option value="1" key="1">
              Sea
            </option>
            <option value="2" key="2">
              Port
            </option>
          </Form.Control>
        </div>
        <div className="col-lg-4">
          <label className="form-label"> Date</label>
          <Form.Control
            type="date"
            disabled={true}
            placeholder="Enter Result "
            name="fromDate"
            className="fromStyle"
            value={voyageActivityCreateInput.fromDate}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) => handleChangeTextInput("fromDate", e.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label">Condition</label>
          <Form.Control
            as="select"
            value={voyageActivityCreateInput.conditionSelected}
            name="conditionSelected"
            onChange={(e) =>
              handleChangeTextInput("conditionSelected", e.target.value)
            }
          >
            <option value="">Select Condition</option>
            <option value="1" key="1">
              Loaded
            </option>
            <option value="2" key="2">
              Ballast
            </option>
          </Form.Control>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-lg-4">
          <Form.Group>
            <Form.Label>R.P.M</Form.Label>
            <Form.Control
              type="number"
              placeholder="Type"
              name="strRPM"
              min={0}
              value={voyageActivityCreateInput.strRPM}
              ref={register({
                required: false,
                maxLength: 100,
              })}
              onChange={(e) => handleChangeTextInput("strRPM", e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="col-lg-4">
          <Form.Group>
            <Form.Label>Engine Speed</Form.Label>
            <Form.Control
              type="number"
              placeholder="Type"
              name="decEngineSpeed"
              min={0}
              value={voyageActivityCreateInput.decEngineSpeed}
              ref={register({
                required: false,
                maxLength: 100,
              })}
              onChange={(e) =>
                handleChangeTextInput("decEngineSpeed", e.target.value)
              }
            />
          </Form.Group>
        </div>
        <div className="col-lg-4">
          <Form.Group>
            <Form.Label>Slip(%)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Type"
              name="decSlip"
              min={0}
              value={voyageActivityCreateInput.decSlip}
              ref={register({
                required: false,
                maxLength: 100,
              })}
              onChange={(e) => handleChangeTextInput("decSlip", e.target.value)}
            />
          </Form.Group>
        </div>
      </div>
      <div className="card card-custom gutter-b">
        <div className="card-body">
          <div className="col-12 voyageEngineerTab">
            <Tabs
              defaultActiveKey={activeKey}
              transition={false}
              id="noanim-tab-example"
              variant="pills"
              className="bg-light"
              onSelect={(key) => handleSelected(key)}
            >
              <Tab eventKey={1} title="Bunker VLSFO">
                {/* <Sonnet /> */}
                <BunkerVLSFOEdit id={id} />
              </Tab>
              <Tab eventKey={2} title="Aux. Engine 1">
                {/* <Sonnet /> */}
                <>
                  <AuxEngine1Edit id={id} />
                </>
              </Tab>
              <Tab eventKey={3} title="Aux. Engine 2">
                {/* <Sonnet /> */}
                <AuxEngine2Edit id={id} />
              </Tab>
              <Tab eventKey={4} title="Aux. Engine 3">
                {/* <Sonnet /> */}
                <AuxEngine3Edit id={id} />
              </Tab>
              <Tab eventKey={5} title="Boiler">
                {/* <Sonnet /> */}
                <BoilerEdit id={id} />
              </Tab>
            </Tabs>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </form>
  );
};

export default VoyageActivityEditEngineer;
