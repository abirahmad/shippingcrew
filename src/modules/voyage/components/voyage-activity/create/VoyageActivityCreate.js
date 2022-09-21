import React, { useState } from "react";
import VoyageActivityCreateOfficer from "./VoyageActivityCreateOfficer";
import VoyageActivityCreateEngineer from "./VoyageActivityCreateEngineer";
import "../../../css/style.css";
import "../../../css/responsive.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { hasEngineerPermission, hasOfficerPermission } from "../../../../../app/modules/Auth/_redux/authCrud";

const VoyageActivityCreate = (props) => {
  const { id } = props;
  const [isOfficer, setIsOfficer] = useState(hasOfficerPermission());
  const [isEngineer, setIsEngineer] = useState(hasEngineerPermission());

  const dispatch = useDispatch();
  // useEffect(() => {
  //   initializeData();
  // }, []);

  // const initializeData = () => {
  //   // if(hasOfficerPermission()){
  //   //   setIsOfficer(true);
  //   // }
  //   // if(hasEngineerPermission()){
  //   //   setIsEngineer(true);
  //   // }
  //   console.log('isEngineer', isEngineer);
  //   console.log('isOfficer', isOfficer);
  // }

  return (
    <>
      <div className="card-body">
        {isOfficer &&
          <div className="mb-4 card card-body">
            <VoyageActivityCreateOfficer id={id} />
          </div>
        }
        {
          isEngineer && isOfficer && <hr />
        }
        {isEngineer && <div className="mb-4 card card-body">
          <VoyageActivityCreateEngineer id={id} />
        </div>
        }
      </div>
    </>
  );
};

export default VoyageActivityCreate;
