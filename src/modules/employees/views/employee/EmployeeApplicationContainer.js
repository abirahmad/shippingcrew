import React from "react";
import EmployeeApplication from "../../components/hr/employee/applications/EmployeeApplication";

const EmployeeApplicationContainer = (props) => {
  return (
    <>
      <EmployeeApplication props={props} />
    </>
  );
};

export default EmployeeApplicationContainer;
