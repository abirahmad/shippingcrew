import moment from "moment";
import * as Types from "../types/Types";

const initialState = {
  voyageActivityAuxEngnList: [],
  isLoading: false,
  voyageActivityAuxEngnInput: {
    intShipEngineID: 4,
    strShipEngineName: "Exht. Engine 3",
    dceMainEngineFuelRPM: "",
    dceRH: '',
    dceLoad: '',
    dceExhtTemp1: '',
    dceExhtTemp2: '',
    dceJacketTemp: moment().format("YYYY-MM-DD"),
    dceScavTemp: '',
    dceLubOilTemp: '',
    dceLubOilPressure: '',
    dceJacketPressure: '',
    dceScavPressure: '',
    dceTCRPM: ''
  },
};

const VoyageActivityAuxEngn3Reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.CHANGE_VOYAGE_ACTIVITY_AUX_ENGN_INPUT3:
      const voyageActivityAuxEngnInput = {
        ...state.voyageActivityAuxEngnInput,
      };
      voyageActivityAuxEngnInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        voyageActivityAuxEngnInput,
      };
      break;

    case Types.GET_VOYAGE_ACTIVITY_AUX3_EDIT_DATA_SET:
      return {
        ...state,
        voyageActivityAuxEngnInput: action.payload
      };
      break;
    case Types.VOYAGE_AUX_ENGN_3_SUBMIT:
      return {
        ...state,
        voyageActivityAuxEngnInput: initialState.voyageActivityAuxEngnInput,
        isLoading: false,
      };
      break;

    case Types.VOYAGE_AUX_ENGN_3_SUBMITTING:
      return {
        ...state,
        isLoading: action.payload,
      };
      break;

    default:
      break;
  }
  return newState;
};
export default VoyageActivityAuxEngn3Reducer;
