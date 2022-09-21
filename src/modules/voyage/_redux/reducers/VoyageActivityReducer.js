import * as Types from "../types/Types";
import moment from "moment";

const initialState = {
  voyageActivityList: [],
  voyageActivityDetail: null,
  isLoading: false,
  voyageActivityCreateInput: {
    positionSelected: "",
    fromDate: moment().format("YYYY-MM-DD"),
    conditionSelected: "",
    strRPM: "",
    decEngineSpeed: "",
    decSlip: "",
  },
};

const VoyageActivityReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.GET_VOYAGE_ACTIVITY:
      return {
        ...state,
        voyageActivityList: action.payload.data,
      };

    case Types.GET_VOYAGE_ACTIVITY_DETAIL:
      return {
        ...state,
        voyageActivityDetail: action.payload,
      };

    case Types.CHANGE_VOYAGE_ACTIVITY_CREATE_INPUT:
      const voyageActivityCreateInput = { ...state.voyageActivityCreateInput };
      voyageActivityCreateInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        voyageActivityCreateInput,
      };
      break;

    case Types.GET_VOYAGE_ACTIVITY_EDIT_DATA_SET:
      return {
        ...state,
        voyageActivityCreateInput: action.payload,
      };
      break;

    default:
      break;
  }
  return newState;
};

export default VoyageActivityReducer;
