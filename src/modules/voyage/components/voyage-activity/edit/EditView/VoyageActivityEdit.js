import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hasEngineerPermission, hasOfficerPermission } from "../../../../../../app/modules/Auth/_redux/authCrud";
import VoyageActivityEditEngineer from "./VoyageActivityEditEngineer";
import VoyageActivityEditOfficer from "./VoyageActivityEditOfficer";

const VoyageActivityEdit = (props) => {
  const { id, activityID } = props;
  const [isOfficer, setIsOfficer] = useState(hasOfficerPermission());
  const [isEngineer, setIsEngineer] = useState(hasEngineerPermission());

  const dispatch = useDispatch();
  useEffect(() => {
    initializeData();
  }, []);
  const initializeData = async () => {
    // dispatch(GetVoyageListDetail(id));
    // const employeeData = await getEmployeData()
    // const vesselId = await getVesselId();
  };
  return (
    <>
      <div className="card-body">
        {isOfficer && (
          <div className="mb-4 card card-body">
            <VoyageActivityEditOfficer id={id} activityID={activityID} />
          </div>
        )}
        {isEngineer && (
          <div className="mb-4 card card-body">
            <VoyageActivityEditEngineer id={id} activityID={activityID} />
          </div>
        )}
      </div>
    </>
  );
};

export default VoyageActivityEdit;
