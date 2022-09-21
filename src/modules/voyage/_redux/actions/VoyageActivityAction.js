import * as Types from "../types/Types";
import axios from "axios";
import { showToast } from "../../../master/utils/ToastHelper";
import { getVesselId } from "../../../../app/modules/Auth/_redux/authCrud";
import moment from "moment";

export const GetVoyageActivityList = (searchValue, voyageId, vessel) => async (
  dispatch
) => {
  let url = `http://iapps.akij.net/asll/public/api/v1/asll/voyageActivity`;
  const vesselId = await getVesselId();
  let isSearchCondition = false;
  if (typeof voyageId === "undefined") {
    voyageId = "";
  }
  if (typeof vessel === "undefined") {
    vessel = "";
  }
  if (typeof searchValue === "undefined") {
    searchValue = "";
  }
  if (searchValue !== "" || voyageId !== "" || vessel !== "") {
    if (vesselId !== null) {
      isSearchCondition = true;
      url += `?search=${searchValue}&voyage=${voyageId}&vessel=${vesselId}`;
    } else {
      // isSearchCondition = true;
      url += `?search=${searchValue}&voyage=${voyageId}&vessel=${vessel}`;
    }
  }

  if (!isSearchCondition && vesselId !== null) {
    url += `?vessel=${vesselId}`;
  }

  console.log("url", url);

  axios.get(url).then((res) => {
    let data = res.data;
    dispatch({ type: Types.GET_VOYAGE_ACTIVITY, payload: data });
  });
};

export const GetVoyageActivityDetail = (id) => (dispatch) => {
  axios
    .get(
      `http://iapps.akij.net/asll/public/api/v1/asll/voyageActivity/show/${id}`
    )

    .then((res) => {
      let data = res.data.data;
      console.log("res.data", res.data);
      dispatch({ type: Types.GET_VOYAGE_ACTIVITY_DETAIL, payload: data });
    });
};

export const GetVoyageActivityDetailForEdit = (id) => (dispatch) => {
  axios
    .get(
      `http://iapps.akij.net/asll/public/api/v1/asll/voyageActivity/show/${id}`
    )

    .then((res) => {
      let data = res.data.data;
      // Set Data for voyage activity input
      if (data !== null) {
        const updatedData = {
          positionSelected: data.intShipPositionID,
          fromDate: data.dteCreatedAt,
          conditionSelected: data.intShipConditionTypeID,
          strRPM: data.strRPM,
          decEngineSpeed: data.decEngineSpeed,
          decSlip: data.decSlip,
        };
        dispatch({
          type: Types.GET_VOYAGE_ACTIVITY_EDIT_DATA_SET,
          payload: updatedData,
        });
      }

      // Set data for bunker
      if (data.bunker !== null) {
        const bunkerData = data.bunker;
        const updatedBunkerData = {
          decBunkerVlsfoCon: bunkerData.decBunkerVlsfoCon,
          decBunkerVlsfoAdj: bunkerData.decBunkerVlsfoAdj,
          decBunkerVlsfoRob: bunkerData.decBunkerVlsfoRob,
          decBunkerLsmgoCon: bunkerData.decBunkerLsmgoCon,
          decBunkerLsmgoAdj: bunkerData.decBunkerLsmgoAdj,
          decBunkerLsmgoRob: bunkerData.decBunkerLsmgoRob,
          decLubMeccCon: bunkerData.decLubMeccCon,
          decLubMeccAdj: bunkerData.decLubMeccAdj,
          decLubMeccRob: bunkerData.decLubMeccRob,
          decLubMecylCon: bunkerData.decLubMecylCon,
          decLubMecylAdj: bunkerData.decLubMecylAdj,
          decLubMecylRob: bunkerData.decLubMecylRob,
          decLubAeccCon: bunkerData.decLubAeccCon,
          decLubAeccAdj: bunkerData.decLubAeccAdj,
          decLubAeccRob: bunkerData.decLubAeccRob,
        };
        dispatch({
          type: Types.GET_VOYAGE_ACTIVITY_Bunker_EDIT_DATA_SET,
          payload: updatedBunkerData,
        });
      }

      // Set data for aux1
      if (data.aux1 !== null) {
        const aux1Data = data.aux1;
        const updateAux1 = {
          dceMainEngineFuelRPM: aux1Data.dceMainEngineFuelRPM,
          dceRH: aux1Data.dceRH,
          dceTCRPM: aux1Data.dceTCRPM,
          dceLoad: aux1Data.dceLoad,
          dceExhtTemp1: aux1Data.dceExhtTemp1,
          dceExhtTemp2: aux1Data.dceExhtTemp2,
          dceJacketTemp: aux1Data.dceJacketTemp,
          dceScavTemp: aux1Data.dceScavTemp,
          dceLubOilTemp: aux1Data.dceLubOilTemp,
          dceLubOilPressure: aux1Data.dceLubOilPressure,
          dceJacketPressure: aux1Data.dceJacketPressure,
          dceScavPressure: aux1Data.dceScavPressure,
          intShipEngineID: 2,
          strShipEngineName: "Exht. Engine 1",
        };
        dispatch({
          type: Types.GET_VOYAGE_ACTIVITY_AUX1_EDIT_DATA_SET,
          payload: updateAux1,
        });
      }

      // Set data for aux2
      if (data.aux2 !== null) {
        const aux2Data = data.aux2;
        const updateAux2 = {
          dceRH: aux2Data.dceRH,
          dceLoad: aux2Data.dceLoad,
          dceTCRPM: aux2Data.dceTCRPM,
          dceExhtTemp1: aux2Data.dceExhtTemp1,
          dceExhtTemp2: aux2Data.dceExhtTemp2,
          dceJacketTemp: aux2Data.dceJacketTemp,
          dceScavTemp: aux2Data.dceScavTemp,
          dceLubOilTemp: aux2Data.dceLubOilTemp,
          dceLubOilPressure: aux2Data.dceLubOilPressure,
          dceJacketPressure: aux2Data.dceJacketPressure,
          dceScavPressure: aux2Data.dceScavPressure,
          intShipEngineID: 3,
          strShipEngineName: "Exht. Engine 2",
        };
        dispatch({
          type: Types.GET_VOYAGE_ACTIVITY_AUX2_EDIT_DATA_SET,
          payload: updateAux2,
        });
      }

      // Set data for aux3
      if (data.aux3 !== null) {
        const aux3Data = data.aux3;
        const updateAux3 = {
          dceRH: aux3Data.dceRH,
          dceLoad: aux3Data.dceLoad,
          dceTCRPM: aux3Data.dceTCRPM,
          dceExhtTemp1: aux3Data.dceExhtTemp1,
          dceExhtTemp2: aux3Data.dceExhtTemp2,
          dceJacketTemp: aux3Data.dceJacketTemp,
          dceScavTemp: aux3Data.dceScavTemp,
          dceLubOilTemp: aux3Data.dceLubOilTemp,
          dceLubOilPressure: aux3Data.dceLubOilPressure,
          dceJacketPressure: aux3Data.dceJacketPressure,
          dceScavPressure: aux3Data.dceScavPressure,
          intShipEngineID: 4,
          strShipEngineName: "Exht. Engine 3",
        };
        dispatch({
          type: Types.GET_VOYAGE_ACTIVITY_AUX3_EDIT_DATA_SET,
          payload: updateAux3,
        });
      }

      //set data for boiler
      if (data.boiler.length > 0) {
        const boilerData = data.boiler[0];
        const updateBoiler = {
          decWorkingPressure: boilerData.decWorkingPressure,
          decPhValue: boilerData.decPhValue,
          decChloride: boilerData.decChloride,
          decAlkalinity: boilerData.decAlkalinity,
          dteCreatedAt: moment(boilerData.dteCreatedAt).format("YYYY-MM-DD"),
        };
        dispatch({
          type: Types.GET_VOYAGE_ACTIVITY_BOILER_EDIT_DATA_SET,
          payload: updateBoiler,
        });
      }
      // get data for voyage activity edit by officer
      if (data !== null) {
        const updatedOfficerData = {
          date: moment(data.dteCreatedAt).format("YYYY-MM-DD"),
          positionSelected: data.intShipPositionID,
          intToPortID: 1,
          intShipConditionTypeId: data.intShipConditionTypeID,
          strWindDirectionName: "",
          strSeaDirection: data.strSeaDirections,
          strSeaDirectionName: "",
          strWindDirection: data.strWindDirection,
          latitude: data.decLatitude,
          longitude: data.decLongitude,
          course: data.intCourse,
          streaming: data.timeSeaStreaming,
          stoppage: data.timeSeaStoppage,
          dailySpeed: data.decSeaDailyAvgSpeed,
          generalSpeed: data.decSeaGenAvgSpeed,
          direction: data.strSeaDirection,
          windBF: data.decWindBF,
          strSeaState: data.strSeaState,
          remarks: data.strRemarks,
          decProduction: data.decProduction,
          decConsumption: data.decConsumption,
          decSeaTemp: data.decSeaTemp,
          decAirTemp: data.decAirTemp,
          decBaroPressure: data.decBaroPressure,
          decDistanceToGo: data.decDistanceToGo,
          decTotalDistance: data.decTotalDistance,
          decSeaDistance: data.decSeaDistance,
          etadate: data.strETADateTime,
          etaTime: data.strETDDateTime,
          strSeaDirectionName: data.label,
          strSeaDirection: data.strSeaDirection,
          strWindDirectionName: data.label,
          strWindDirection: data.strWindDirection,
        };
        dispatch({
          type: Types.VOYAGE_ACTIVITY_EDIT_ENGINEER_DATA_SET,
          payload: updatedOfficerData,
        });
      }
    });
};

export const handleChangeVoyageActivityCreateInput = (name, value) => (
  dispatch
) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({
    type: Types.CHANGE_VOYAGE_ACTIVITY_CREATE_INPUT,
    payload: formData,
  });
};

export const getShipConditionType = () => async (dispatch) => {
  axios
    .get(`http://iapps.akij.net/asll/public/api/v1/asll/getShipConditionType`)
    .then((res) => {
      let data = res.data.data;
      dispatch({ type: Types.GET_VOYAGE_SHIP_CONDITION, payload: data });
    });
};

export const handleChangeVoyageActivityInput = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({
    type: Types.CHANGE_VOYAGE_ACTIVITY_INPUT,
    payload: formData,
  });
};
export const voyageWindDirection = () => (dispatch) => {
  let responsList = {
    isLoading: false,
    data: [],
    status: false,
  };

  let windData = [
    {
      id: 1,
      name: "N",
    },
    {
      id: 2,
      name: "NNE",
    },
    {
      id: 3,
      name: "NE",
    },
    {
      id: 4,
      name: "ENE",
    },
    {
      id: 5,
      name: "E",
    },
    {
      id: 6,
      name: "ESE",
    },
    {
      id: 7,
      name: "SE",
    },
    {
      id: 8,
      name: "SSE",
    },
    {
      id: 9,
      name: "S",
    },
    {
      id: 10,
      name: "SSW",
    },
    {
      id: 11,
      name: "SW",
    },
    {
      id: 12,
      name: "WSW",
    },
    {
      id: 13,
      name: "W",
    },
    {
      id: 14,
      name: "WNW",
    },
    {
      id: 15,
      name: "NW",
    },
    {
      id: 16,
      name: "NNW",
    },
  ];
  dispatch({
    type: Types.VOYAGE_WIND_DIREACTION_DATA,
    payload: windData,
  });
  // const url = `http://iapps.akij.net/asll/public/api/v1/asll/voyage/ports`;

  return responsList;
};

export const officerActivitySubmissionAction = (data, intVoyageID) => (
  dispatch
) => {
  let unitId = 17; //await getUnit();
  let actionId = 1; //await getUserId();

  // return false;

  let responseList = {
    isLoading: true,
    data: {},
    status: false,
  };

  if (data.positionSelected === null || data.positionSelected === "") {
    showToast("error", "Please give ship position !");
    return false;
  }

  if (
    data.intShipConditionTypeId === null ||
    data.intShipConditionTypeId === ""
  ) {
    showToast("error", "Please give ship condition !");
    return false;
  }

  if (data.date.length === 0) {
    showToast("error", "Please give a date !");
    return false;
  }

  if (data.latitude.length === 0) {
    showToast("error", "Please give latitude !");
    return false;
  }

  if (data.longitude.length === 0) {
    showToast("error", "Please give a longitude !");
    return false;
  }

  if (data.course.length === 0) {
    showToast("error", "Please give a course !");
    return false;
  }

  if (data.streaming.length === 0) {
    showToast("error", "Please give time at sea streaming !");
    return false;
  }

  if (data.stoppage.length === 0) {
    showToast("error", "Please give time at sea stoppage !");
    return false;
  }

  if (data.dailySpeed.length === 0) {
    showToast("error", "Please give daily speed !");
    return false;
  }

  if (data.generalSpeed.length === 0) {
    showToast("error", "Please give general average speed !");
    return false;
  }

  if (data.strWindDirection.length === 0) {
    showToast("error", "Please give wind direction !");
    return false;
  }

  if (data.windBF.length === 0) {
    showToast("error", "Please give wind wind BF !");
    return false;
  }

  if (data.strSeaDirection.length === 0) {
    showToast("error", "Please give sea direction !");
    return false;
  }

  if (data.strSeaState.length === 0) {
    showToast("error", "Please give sea state !");
    return false;
  }

  if (data.decConsumption.length === 0) {
    showToast("error", "Please give consumption !");
    return false;
  }

  if (data.decBaroPressure.length === 0) {
    showToast("error", "Please give baro pressure !");
    return false;
  }

  if (data.decAirTemp.length === 0) {
    showToast("error", "Please give air temparature !");
    return false;
  }

  if (data.etadate.length === 0) {
    showToast("error", "Please give ETA date!");
    return false;
  }

  if (data.decSeaDistance.length === 0) {
    showToast("error", "Please give sea distance!");
    return false;
  }

  if (data.decTotalDistance.length === 0) {
    showToast("error", "Please give total distance!");
    return false;
  }

  if (data.decDistanceToGo.length === 0) {
    showToast("error", "Please give distance to go!");
    return false;
  }

  if (data.decSeaTemp.length === 0) {
    showToast("error", "Please give sea temparature!");
    return false;
  }

  if (data.decProduction.length === 0) {
    showToast("error", "Please give production!");
    return false;
  }

  const postData = {
    intUnitId: unitId,
    intVoyageID: intVoyageID,
    intShipPositionID: data.positionSelected,
    intShipConditionTypeID: data.intShipConditionTypeId.value,
    dteCreatedAt: data.date,
    decLatitude: parseFloat(data.latitude),
    decLongitude: parseFloat(data.longitude),
    intCourse: parseInt(data.course),
    timeSeaStreaming: data.streaming,
    timeSeaStoppage: data.stoppage,
    decSeaDistance: data.decSeaDistance,
    decSeaDailyAvgSpeed: parseFloat(data.dailySpeed),
    decSeaGenAvgSpeed: parseFloat(data.generalSpeed),
    strSeaDirectionName: data.label,
    strSeaDirection: data.strSeaDirection,
    strWindDirectionName: data.label,
    strWindDirection: data.strWindDirection,
    strSeaState: data.strSeaState,
    // strSeaDirection:
    //   typeof data.strSeaDirection.label == undefined
    //     ? data.strSeaDirection.label
    //     : null,
    // strSeaState: data.seaDSS,
    // strWindDirection:
    //   typeof data.strWindDirection.label == undefined
    //     ? data.strWindDirection.label
    //     : null,
    decWindBF: parseFloat(data.windBF),
    intETAPortToID: null,
    strETAPortToName: null,
    intETDPortToID: null,
    strETDPortToName: null,
    strETADateTime: data.etadate,
    strETDDateTime: data.etaTime,
    strRemarks: data.remarks,
    intVoyagePortID: null,
    decTimePortWorking: 0,
    strPortDirection: null,
    strPortDSS: null,
    decCargoTobeLD: 0,
    decCargoPrevLD: 0,
    decCargoDailyLD: 0,
    decCargoTTLLD: 0,
    intVlsfoRcvd: 0,
    intLsmgRcvd: 0,
    intLuboilRcvd: 0,
    decCargoBalanceCGO: 0,
    // strSeaState: data.strSeaState,
    decProduction: data.decProduction,
    decConsumption: data.decConsumption,
    decSeaTemp: data.decSeaTemp,
    decAirTemp: data.decAirTemp,
    decBaroPressure: data.decBaroPressure,
    decSeaDistance: data.decSeaDistance,
    decTotalDistance: data.decTotalDistance,
    decDistanceToGo: data.decDistanceToGo,
  };

  dispatch({
    type: Types.VOYAGE_ACTIVITY_CREATE_OFFICER_SUBMITTING,
    payload: true,
  });

  let postUrl = `http://iapps.akij.net/asll/public/api/v1/asll/voyageActivity/store`;
  axios
    .post(postUrl, postData)
    .then(function(response) {
      const { status, message } = response.data;

      if (status) {
        showToast("success", message);
      } else {
        showToast("error", message);
      }
      responseList.data = response.data;
      responseList.isLoading = false;
      responseList.status = response.data.status;
      if (response.data.status) {
        dispatch({
          type: Types.VOYAGE_ACTIVITY_CREATE_OFFICER_SUBMIT,
          payload: responseList,
        });
      } else {
        showToast("error", message);
      }
    })
    .catch(function(error) {
      responseList.isLoading = false;

      dispatch({
        type: Types.VOYAGE_ACTIVITY_CREATE_OFFICER_SUBMIT,
        payload: responseList,
      });
    });
};
