import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Image, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { officerActivitySubmissionAction, getShipConditionType, handleChangeVoyageActivityInput, voyageWindDirection } from "../../../_redux/actions/VoyageActivityAction";

const VoyageActivityCreateOfficer = (props) => {
  const { id } = props;
  const { register, handleSubmit, errors, setValue } = useForm();
  const dispatch = useDispatch();

  const voyageActivityInputData = useSelector(
    (state) => state.VoyageActivityOfficerReducer.voyageActivityInput
  );

  console.log('voyageActivityInputData ===>>>', voyageActivityInputData)
  const loading = useSelector((state) => state.VoyageActivityOfficerReducer.isLoading);
  const shipConditionTypeOptionData = useSelector(
    (state) => state.VoyageActivityOfficerReducer.shipConditionTypeListOptionData
  );
  const windDirectionListOptionData = useSelector(
    (state) => state.VoyageActivityOfficerReducer.windDirectionListOptionData
  );

  const handleChangeTextInput = (name, value) => {
    console.log(name, value);
    dispatch(handleChangeVoyageActivityInput(name, value));
  };

  useEffect(() => {
    dispatch(getShipConditionType());
    dispatch(voyageWindDirection());
  }, []);

  //add boiler info in multiple list
  const onSubmit = (data) => {
    dispatch(
      officerActivitySubmissionAction(voyageActivityInputData, id)
    );
  };

  return (
    <form
      className="form form-label-right"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
      <div className="form-group row">
        <div className="col-lg-4">
          <label className="form-label">Ship Position</label>
          <Form.Control
            as="select"
            onChange={(e) =>
              handleChangeTextInput("positionSelected", e.target.value)
            }
          >
            <option>Search and select</option>
            <option value="1">Sea</option>
            <option value="2">Port</option>
          </Form.Control>
        </div>
        <div className="col-lg-4">
          <label className="form-label"> Date</label>
          <Form.Control
            type="date"
            name="date"
            className="fromStyle"
            value={voyageActivityInputData.date}
            onChange={(e) => handleChangeTextInput("date", e.target.value)}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label">Condition</label>
          <RHFInput
            as={<Select options={shipConditionTypeOptionData} />}
            rules={{ required: false }}
            name="intShipConditionTypeId"
            register={register}
            value=""
            onChange={(e) => handleChangeTextInput("intShipConditionTypeId", e)}
            setValue={setValue}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-lg-4">
          <div className=" row">
            <div className="col-lg-6">
              <Form.Label>LAT</Form.Label>
              <Form.Control
                type="text"
                placeholder="LAT"
                value={voyageActivityInputData.latitude}
                name="latitude"
                ref={register({
                  required: false,
                  maxLength: 100,
                })}
                onChange={(e) =>
                  handleChangeTextInput("latitude", e.target.value)
                }
              />
            </div>
            <div className="col-lg-6">
              <Form.Label>LONG</Form.Label>
              <Form.Control
                type="text"
                placeholder="LAT"
                value={voyageActivityInputData.longitude}
                name="longitude"
                ref={register({
                  required: false,
                  maxLength: 100,
                })}
                onChange={(e) =>
                  handleChangeTextInput("longitude", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <Form.Label>Course(0-360)</Form.Label>
          <Form.Control
            type="text"
            placeholder="LAT"
            value={voyageActivityInputData.course}
            name="course"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) => handleChangeTextInput("course", e.target.value)}
          />
        </div>
      </div>
      <div>
        <p className="text-uppercase text-bold">Time at sea</p>
      </div>
      <div className="border-top"></div>
      <div className="form-group row mt-3">
        <div className="col-lg-4">
          <div className=" row">
            <div className="col-lg-6">
              <Form.Label>Streaming</Form.Label>
              <Form.Control
                type="text"
                placeholder="Streaming"
                value={voyageActivityInputData.streaming}
                name="streaming"
                ref={register({
                  required: false,
                  maxLength: 100,
                })}
                onChange={(e) =>
                  handleChangeTextInput("streaming", e.target.value)
                }
              />
            </div>
            <div className="col-lg-6">
              <Form.Label>Stoppage</Form.Label>
              <Form.Control
                type="number"
                placeholder="stoppage"
                value={voyageActivityInputData.stoppage}
                name="stoppage"
                ref={register({
                  required: false,
                  maxLength: 100,
                })}
                onChange={(e) =>
                  handleChangeTextInput("stoppage", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className=" col-lg-3">
          <Form.Label>DAILY AVG SPEED(Auto)</Form.Label>
          <Form.Control
            type="number"
            placeholder="LAT"
            value={voyageActivityInputData.dailySpeed}
            name="dailySpeed"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("dailySpeed", e.target.value)
            }
          />
        </div>
        <div className="col-lg-2">
          <Form.Label>GENERAL AVG SPEED</Form.Label>
          <Form.Control
            type="number"
            placeholder="LAT"
            value={voyageActivityInputData.generalSpeed}
            name="generalSpeed"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("generalSpeed", e.target.value)
            }
          />
        </div>
      </div>
      <div>
        <p className="text-uppercase text-bold">WIND</p>
      </div>
      <div className="border-top"></div>
      <div className="form-group row mt-3">
        <div className=" col-lg-3">
          <Form.Label>Direction</Form.Label>
          {/* <RHFInput
            as={<Select options={windDirectionListOptionData} />}
            rules={{ required: false }}
            name="strWindDirection"
            register={register}
            value={voyageActivityInputData.strWindDirection}
            onChange={(e) => handleChangeTextInput("strWindDirection", e)}
            setValue={setValue}
          /> */}
          <RHFInput
            as={<Select options={windDirectionListOptionData} />}
            rules={{ required: false }}
            name="strWindDirection"
            register={register}
            value={voyageActivityInputData.strWindDirection}
            onChange={(option) => {
              handleChangeTextInput("strWindDirectionName", option.label);
              handleChangeTextInput("strWindDirection", option.value);
            }}
            setValue={setValue}
          />
        </div>
        <div className=" col-lg-3">
          <Form.Label>BF (0-12)</Form.Label>
          <Form.Control
            type="number"
            placeholder="windBF"
            value={voyageActivityInputData.windBF}
            name="windBF"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) => handleChangeTextInput("windBF", e.target.value)}
          />
        </div>
        <div className="col-lg-3">
          <RHFInput
            as={<Select options={windDirectionListOptionData} />}
            rules={{ required: false }}
            name="strSeaDirection"
            register={register}
            value={voyageActivityInputData.strSeaDirection}
            onChange={(option) => {
              handleChangeTextInput("strSeaDirectionName", option.label);
              handleChangeTextInput("strSeaDirection", option.value);
            }}
            setValue={setValue}
          />
          {/* <RHFInput
            as={<Select options={windDirectionListOptionData} />}
            rules={{ required: false }}
            name="strSeaDirection"
            register={register}
            value={voyageActivityInputData.strSeaDirection}
            onChange={(e) => handleChangeTextInput('strSeaDirection', e)}
            setValue={setValue}
          /> */}
        </div>
        <div className="col-lg-3">
          <Form.Label>Sea State (0-12)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Sea State (0-12)"
            value={voyageActivityInputData.strSeaState}
            name="strSeaState"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("strSeaState", e.target.value)
            }
          />
        </div>
      </div>
      <div>
        <p className="text-uppercase text-bold">ETA</p>
      </div>
      <div className="border-top"></div>
      <div className="form-group row mt-3">
        {/* <div className=" col-lg-3">
          <Form.Label>PORT TO</Form.Label>
          <Form.Control
              type="Date"
              placeholder="PORT TO"
              value={voyageActivityInputData.etaPort}
              name="portTo"
              ref={register({
                required: false,
                maxLength: 100,
              })}
              onChange={(e) =>
                handleChangeTextInput("portTo", e.target.value)
              }
            />
        </div> */}
        <div className=" col-lg-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Eta Date"
            name="etadate"
            className="fromStyle"
            value={voyageActivityInputData.etadate}
            onChange={(e) => handleChangeTextInput("etadate", e.target.value)}
          />
        </div>
        <div className=" col-lg-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Type"
            name="etaTime"
            onChange={(e) => handleChangeTextInput("etaTime", e.target.value)}
          />
        </div>
        <div className="col-lg-6">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            type="text"
            placeholder="Remarks"
            value={voyageActivityInputData.remarks}
            name="remarks"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) => handleChangeTextInput("remarks", e.target.value)}
          />
        </div>
      </div>
      <div>
        <p className="text-uppercase text-bold">ROB FRESH WATER</p>
      </div>
      <div className="border-top"></div>
      <div className="form-group row mt-3">
        <div className=" col-lg-3">
          <Form.Label>Production</Form.Label>
          <Form.Control
            type="text"
            placeholder="Porduction"
            value={voyageActivityInputData.decProduction}
            name="decProduction"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decProduction", e.target.value)
            }
          />
        </div>
        <div className=" col-lg-3">
          <Form.Label>Consumption</Form.Label>
          <Form.Control
            type="text"
            placeholder="consumption"
            value={voyageActivityInputData.decConsumption}
            name="decConsumption"
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decConsumption", e.target.value)
            }
          />
        </div>
        <div className="col-lg-3">
          <Form.Label>Sea Temperature</Form.Label>
          <Form.Control
            type="number"
            placeholder="Sea Temparature"
            value={voyageActivityInputData.decSeaTemp}
            name="decSeaTemp"
            min={0}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decSeaTemp", e.target.value)
            }
          />
        </div>
        <div className="inputError margin-minus-10">
          {errors.decSeaTemp &&
            errors.decSeaTemp.type === "required" &&
            "Date Can't be blank"}
        </div>
        <div className="col-lg-3">
          <Form.Label>Air Temperature</Form.Label>
          <Form.Control
            type="number"
            placeholder="Air Temperature"
            value={voyageActivityInputData.decAirTemp}
            name="decAirTemp"
            min={0}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decAirTemp", e.target.value)
            }
          />
        </div>
        <div className="col-lg-3">
          <Form.Label>BARO Pressure </Form.Label>
          <Form.Control
            type="number"
            placeholder="BARO Pressure"
            value={voyageActivityInputData.decBaroPressure}
            name="decBaroPressure"
            min={0}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decBaroPressure", e.target.value)
            }
          />
        </div>
      </div>
      <div>
        <p className="text-uppercase text-bold">DISTANCE</p>
      </div>
      <div className="border-top"></div>
      <div className="form-group row mt-3">
        <div className=" col-lg-3">
          <Form.Label>Last 24 hours</Form.Label>
          <Form.Control
            type="number"
            placeholder="Last 24 hours"
            value={voyageActivityInputData.decSeaDistance}
            name="decSeaDistance"
            min={0}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decSeaDistance", e.target.value)
            }
          />
        </div>
        <div className=" col-lg-3">
          <Form.Label>Total Distance</Form.Label>
          <Form.Control
            type="number"
            placeholder="Total Distance"
            value={voyageActivityInputData.decTotalDistance}
            name="decTotalDistance"
            min={0}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decTotalDistance", e.target.value)
            }
          />
        </div>
        <div className="col-lg-3">
          <Form.Label>Distance to go</Form.Label>
          <Form.Control
            type="number"
            placeholder="Distance to go"
            value={voyageActivityInputData.decDistanceToGo}
            name="decDistanceToGo"
            min={0}
            ref={register({
              required: false,
              maxLength: 100,
            })}
            onChange={(e) =>
              handleChangeTextInput("decDistanceToGo", e.target.value)
            }
          />
        </div>
      </div>
      {loading ? (
        <Button
          className="col-xl-2 col-lg-2 col-4 float-right"
          variant="primary"
          disabled={true}
        >
          Saving...
          <span className="ml-3 spinner spinner-white"></span>
        </Button>
      ) : (
        <Button
          className="col-xl-2 col-lg-2 col-4 float-right"
          variant="primary"
          type="submit"
        >
          Save
        </Button>
      )}
      <div className="clearfix"></div>
    </form>
  );
};

export default VoyageActivityCreateOfficer;
