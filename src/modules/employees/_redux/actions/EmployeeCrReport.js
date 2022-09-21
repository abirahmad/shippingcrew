import * as Types from "../../types/Types";
import { generateNewDate, currentdate } from "../../utils/DateHelper";
import axios from "axios";
import { Alert } from "bootstrap";
import { toast } from "react-toastify";



export const EmployeeCrReportCriteria = () => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
  };
  let responseData ={
    isLoading:true,
    status:false,
    data:{}
  }

  dispatch({ type: Types.GET_EMPLOYEE_CRITERIA, payload: responseData });
  axios
    .get(
      `http://10.17.2.214:8080/ASSLAPI/public/api/v1/asllhr/crReport/getCrReportCriteriaOption`,
      { headers: headers }
    )
    .then((res) => {
      console.log('ReponseCertificate', res);
      let data = res.data.data;
      responseData.data = data;
      responseData.isLoading=false
       dispatch({ type: Types.GET_EMPLOYEE_CRITERIA, payload: responseData });
    })
    .catch( (error)=> {
      responseData.isLoading=false
      dispatch({ type: Types.GET_EMPLOYEE_CRITERIA, payload: responseData });
    })
};
export const employeeReasonOfAppraisal = (data) => async (dispatch) => {

  let data = [
    {
      id: 1,
      name: "Crew sign off",
      ysnChecked: 0,
    },
    {
      id: 2,
      name: "Master/CE sign off",
      ysnChecked: 0,
    },
    {
      id: 3,
      name: "Promotion",
      ysnChecked: 0,
    },
    {
      id: 4,
      name: "Other",
      ysnChecked: 0,
    },
  ]

  dispatch({ type: Types.EMPLOYEE_REASON_OF_APPRAISAL, payload: data });
}

export const selectedReasonOfAppraisal = (data) => async (dispatch) => {
  dispatch({ type: Types.SELECT_REASON_OF_APPRAISAL, payload: data });
}

export const getCrReportEmployeeInfoByEmployeeId = (employee) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
  };
  console.log('employee', employee);
  axios
    .get(
      `http://10.17.2.214:8080/ASSLAPI/public/api/v1/asllhr/crReport/getCrReportEmployeeInfoByEmployeeId?intEmployeeId=${employee.value}`,
      { headers: headers }
    )
    .then((res) => {
      console.log('employey inof', res);
      let data = res.data.data[0];
      dispatch({ type: Types.GET_EMPLOYEE_DETAILS_BY_ID, payload: data });
    });

}

export const employeeCrReportSubmit = (stateInput,criteria) => async (dispatch) => {
  let data = {};
  const headers = {
    "Content-Type": "application/json",
  };

  let responseData ={
    isLoading:true,
    status:false,
    data:{}
  }

  dispatch({ type: Types.EMPLOYEE_CR_REPORT_SUBMIT, payload: responseData });
  
  let critRow = [];
  for (let i = 0; i < criteria.length; i++) {
    let parentCrite = criteria[i].options;
    for (let c = 0; c < parentCrite.length; c++) {
      const element = parentCrite[c];
    
      if (element.ysnChecked == 1) {
      
        critRow.push(element);
      }
    }
  }
  console.log('critRow', critRow);
  if (critRow.length < 9) {

    toast.error("Please select All Reason of Appraisal");
    return false;
  }

  stateInput.criterias = criteria;
  console.log('stateInput', stateInput);

  axios
    .post(
      `http://10.17.2.214:8080/ASSLAPI/public/api/v1/asllhr/crReport/store`,stateInput,
      { headers: headers }
    )
    .then((res) => {
      console.log('ReponseCertificate', res);
      let data = res.data;
      responseData.isLoading = false
      // dispatch({ type: Types.GET_EMPLOYEE_CERTIFICATE_LIST, payload: data });
      dispatch({ type: Types.EMPLOYEE_CR_REPORT_SUBMIT, payload: responseData });
    });

  
}
export const employeeCrReportSelect = (item, indexParentCriteria, indexChild, parentCriteria) => async (dispatch) => {
  let data = {
    item, indexParentCriteria, indexChild, parentCriteria
  }
  dispatch({ type: Types.GET_EMPLOYEE_CRITERIA_SELECT, payload: data });
};


