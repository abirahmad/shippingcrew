import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Form, Image, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

import "../css/custom.css";
// import logo from "../../../../../images/logo-dark.png";
import logo from "../../../../images/logo-dark.png";
import {
  EmployeeCrReportCriteria,
  employeeCrReportSelect,
  employeeCrReportSubmit,
  employeeReasonOfAppraisal,
  selectedReasonOfAppraisal,
} from "../../../../_redux/actions/EmployeeCrReport";

const EmployeeApplication = withRouter(({ history, props }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, setValue } = useForm();

  const criteria = useSelector((state) => state.employeeCrReducer.criteriaList);
  const appraisal = useSelector(
    (state) => state.employeeCrReducer.appraisalList
  );
  const textBoxShow = useSelector(
    (state) => state.employeeCrReducer.textBoxShow
  );
  const stateInput = useSelector((state) => state.employeeCrReducer.inputData);

  console.log("criteria", criteria);

  useEffect(() => {
    dispatch(EmployeeCrReportCriteria());
    dispatch(employeeReasonOfAppraisal());
  }, []);

  const appraisalSubmit = (
    item,
    indexParentCriteria,
    indexChild,
    parentCriteria
  ) => {
    dispatch(
      employeeCrReportSelect(
        item,
        indexParentCriteria,
        indexChild,
        parentCriteria
      )
    );
  };

  const getChangeAppraisal = (e) => {
    let data = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch(selectedReasonOfAppraisal(data));
  };
  const onSubmit = (data) => {
    alert();
    dispatch(employeeCrReportSubmit(criteria));
  };

  return (
    <>
      <div className="card p-5">
        <div className="container pb-5 mb-4 ml-3">
          <div className="row  border-around">
            <div className="col-lg-8">
              <h3 className="card-label a-lebel text-center pt-5">
                AKIJ SHIPPING LINE LTD.
              </h3>
            </div>

            <div className="col-lg-4 shippingLineLogo">
              <Image src={logo} roundedCircle className="akij-logo-ship" />
            </div>
          </div>
        </div>
        <div className="employee-application-table">
          <form>
            <Table striped bordered hover responsive size="sm ">
              <thead>
                <tr>
                  <th>Vessel</th>
                  <th>
                    {" "}
                    <input type="text" className="form-control form-input" />
                  </th>
                  <th>Date</th>
                  <th>
                    {" "}
                    <input type="date" className="form-control form-input  " />
                  </th>
                </tr>
                <tr>
                  <th>Name of Seafarer</th>
                  <th>
                    {" "}
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </th>
                  <th>Rank</th>
                  <th>
                    {" "}
                    <input type="text" className="form-control form-input" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4">
                    <p className="employe-application-text">To</p>
                    <span>
                      The{" "}
                      <input
                        type="text"
                        className="form-control form-input d-inline input-width"
                        placeholder=""
                      />
                    </span>
                    <p className="employe-application-text pt-2">
                      Akij ASSETS Ltd.
                    </p>
                    <p className="pb-5 employe-application-text">
                      Dhaka,Bangladesh.
                    </p>
                    <p className="pt-5 employe-application-text">Dear Sir,</p>
                    <p className="employe-application-text">
                      Kindly arrange to relieve me
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-bold">From Date/Month</td>
                  <td>
                    <input
                      type="date"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                  <td className="text-bold">At Port</td>
                  <td>
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <p className="pb-4 pt-1">
                      The actual date/Port of relief may be arranged as per your
                      convenience.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1">Commencement of tenure :</td>
                  <td colSpan="3">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="1">Date of completion :</td>
                  <td colSpan="3">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="1">Extension requested up to:</td>
                  <td colSpan="3">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="1">Expecting date of Rejoining :</td>
                  <td colSpan="3">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="4 p-5">
                    <p className="p-3"></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">Remarks from seafarer:</td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <p className="p-5"></p>
                    <p className="p-3"></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    Remarks from the Master and /or the Chief Engineer :
                  </td>
                </tr>
                <tr>
                  <td colSpan="4 p-5">
                    <p className="p-5"></p>
                    <p className="p-1"></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <p className="text-center pb-5 pt-1">Yours faithfully</p>
                    <p className="text-center pt-5">Signature of Seafarer</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-bold text-right">
                    Name :
                  </td>
                  <td colSpan="2">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-bold text-right">
                    Rank :
                  </td>
                  <td colSpan="2">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder=""
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <p className="p-5"></p>
                    <p className="p-5"></p>
                    <p className="p-5"></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    Master Signature & Date
                  </td>
                  <td colSpan="2" className="text-center">
                    Chief Engineer Signature & Date (if require)
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <p className="pl-2 pt-2 employe-application-text"> Name:</p>
                  </td>
                  <td colSpan="2">
                    <p className="pl-2 pt-2 employe-application-text"> Name:</p>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button type="submit">Submit </Button>
          </form>
        </div>
      </div>
    </>
  );
});

export default EmployeeApplication;
