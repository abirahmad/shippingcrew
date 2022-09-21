import * as Types from "../types/Types";
import axios from "axios";
import { showToast } from "../../../master/utils/ToastHelper";

/*==voyage boiler input handle==*/
export const handleChangeVoyageActivityAuxEngnInput2 = (name, value) => (
  dispatch
) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({
    type: Types.CHANGE_VOYAGE_ACTIVITY_AUX_ENGN_INPUT2,
    payload: formData,
  });
};

export const AuxEngnSubmitAction = (
  auxEngine2Input,
  voyageInput,
  intVoyageID
) => (dispatch) => {
  let unitId = 17; //await getUnit();
  let actionId = 1; //await getUserId();

  //form validatation check For Engineer
  if (voyageInput.positionSelected.length === 0) {
    showToast("error", "Position can't be blank !");
    return false;
  }
  if (voyageInput.fromDate.length === 0) {
    showToast("error", "Date can't be blank !");
    return false;
  }
  if (voyageInput.conditionSelected.length === 0) {
    showToast("error", "Condition can't be blank !");
    return false;
  }
  if (voyageInput.strRPM.length === 0) {
    showToast("error", "R.P.M can't be blank !");
    return false;
  }
  if (voyageInput.decEngineSpeed.length === 0) {
    showToast("error", "Engin Speed can't be blank !");
    return false;
  }
  if (voyageInput.decSlip.length === 0) {
    showToast("error", "Slip can't be blank !");
    return false;
  }

  //VALIDATION//
  if (voyageInput.positionSelected.length === 0) {
    showToast("error", "Ship position can't be blank !");
    return false;
  }
  if (voyageInput.fromDate.length === 0) {
    showToast("error", "Date can't be blank !");
    return false;
  }
  if (voyageInput.conditionSelected.length === 0) {
    showToast("error", "Condition can't be blank !");
    return false;
  }
  if (voyageInput.strRPM.length === 0) {
    showToast("error", "RPM can't be blank !");
    return false;
  }
  if (voyageInput.decEngineSpeed.length === 0) {
    showToast("error", "Engine speed can't be blank !");
    return false;
  }
  if (voyageInput.decSlip.length === 0) {
    showToast("error", "Slip can't be blank !");
    return false;
  }

  //========================

  if (auxEngine2Input.dceRH.length === 0) {
    showToast("error", "R/H can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceLoad.length === 0) {
    showToast("error", "Load can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceExhtTemp1.length === 0) {
    showToast("error", "Minimum Aux Temp can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceExhtTemp2.length === 0) {
    showToast("error", "Maximum Aux Temp can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceJacketTemp.length === 0) {
    showToast("error", "Jacket Temp can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceScavTemp.length === 0) {
    showToast("error", "SCAV Temp can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceLubOilTemp.length === 0) {
    showToast("error", "Lub Oil Temp can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceJacketPressure.length === 0) {
    showToast("error", "Jacket Pressure can't be blank !");
    return false;
  }
  if (auxEngine2Input.dceScavPressure.length === 0) {
    showToast("error", "Scav Pressure can't be blank !");
    return false;
  }

  let responseList = {
    isLoading: true,
    data: {},
    status: false,
  };

  dispatch({
    type: Types.VOYAGE_AUX_ENGN_SUBMITTING,
    payload: responseList,
  });

  auxEngine2Input.intCreatedBy = actionId;
  auxEngine2Input.intShipConditionTypeID = voyageInput.conditionSelected.id;
  auxEngine2Input.intShipPositionID = voyageInput.positionSelected.id;
  auxEngine2Input.intUnitId = unitId;
  auxEngine2Input.intVoyageID = intVoyageID;
  auxEngine2Input.strRPM = voyageInput.strRPM;
  auxEngine2Input.dteCreatedAt = voyageInput.fromDate;
  auxEngine2Input.decEngineSpeed = voyageInput.decEngineSpeed;
  auxEngine2Input.decSlip = voyageInput.decSlip;
  auxEngine2Input.strRemarks = null;

  let postUrl = `http://iapps.akij.net/asll/public/api/v1/asll/voyageActivity/exhtStore`;
  axios
    .post(postUrl, auxEngine2Input)
    .then(function(response) {
      responseList.data = response.data;
      responseList.isLoading = false;
      responseList.status = response.data.status;
      dispatch({
        type: Types.VOYAGE_AUX_ENGN_3_SUBMIT,
        payload: responseList,
      });

      if (response.data.status) {
        showToast("success", response.data.message);
      } else {
        showToast("error", response.data.message);
      }
    })
    .catch(function(error) {
      responseList.isLoading = false;

      dispatch({
        type: Types.VOYAGE_AUX_ENGN_2_SUBMIT,
        payload: responseList,
      });
      showToast(
        "error",
        "Something went wrong, Please fill all data correctly and try again !"
      );
    });
};
