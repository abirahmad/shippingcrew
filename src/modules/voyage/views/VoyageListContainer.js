import React from "react";
import { Form, Button, Image, Col, Row, Table, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import VoyageFilter from "../components/voyage/list/VoyageFilter";
import VoyageList from "../components/voyage/list/VoyageList";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const VoyageListContainer = () => {
  const history = useHistory();

  // First check if exist an id,
  // if id, then hit api and get data for this id
  // if not exist, then hit api ad get last voyage id

  return (
    <div className="card card-custom gutter-b">
      <div className="row pt-5 pl-4 pb-3">
        <div className="col-xl-9 col-lg-9 col-md-9 col-6">
          <h3>Voyage List</h3>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-6 VoyageListBtn">
          <Dropdown className="d-inline mr-2">
            <Dropdown.Toggle
              className="text-bold"
              variant="light text-primary"
              id="dropdown-basic"
            >
              Export
              </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <i class="far fa-file-pdf"></i>
                <span className="ml-2">Pdf</span>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">
                <i class="far fa-file-excel"></i>
                {
                  <ReactHTMLTableToExcel
                    id=""
                    className="excelBtn"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Excel"
                  />
                }
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          <Button
            className="pl-3 pr-3 text-bold"
            variant="primary"
            onClick={() => {
              history.push("/voyage/add");
            }}
          >
            Add New
          </Button>
        </div>
        <div className="clearfix"></div>
      </div>

      <VoyageFilter />
      <div className="container" id="id">
        <VoyageList />
      </div>
    </div>
  );
};

export default VoyageListContainer;
