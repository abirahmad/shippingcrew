import moment from "moment";
import * as Types from "../types/Types";
// Test
const initialState = {
  isLoading: false,
  voyageActivityBunkerInput: {
    intUnitId: null,
    intVoyageID: null,
    intShipPositionID: null,
    intShipConditionTypeID: null,
    dteCreatedAt: moment().format("YYYY-MM-DD"),
    strRPM: null,
    strRemarks: null,
    decEngineSpeed: '',
    decSlip: '',

    decBunkerVlsfoCon: '',
    decBunkerVlsfoAdj: '',
    decBunkerVlsfoRob: '',
    decBunkerLsmgoCon: '',
    decBunkerLsmgoAdj: '',
    decBunkerLsmgoRob: '',
    decLubMeccCon: '',
    decLubMeccAdj: '',
    decLubMeccRob: '',
    decLubMecylCon: '',
    decLubMecylAdj: '',
    decLubMecylRob: '',
    decLubAeccCon: '',
    decLubAeccAdj: '',
    decLubAeccRob: '',
    intCreatedBy: null,
  },
};

const VoyageActivityBunkerReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case Types.CHANGE_VOYAGE_ACTIVITY_BUNKER_INPUT:
      const voyageActivityBunkerInput = { ...state.voyageActivityBunkerInput };
      voyageActivityBunkerInput[action.payload.name] = action.payload.value;
      return {
        ...state,
        voyageActivityBunkerInput,
      };
      break;

    case Types.GET_VOYAGE_ACTIVITY_Bunker_EDIT_DATA_SET:
      return {
        ...state,
        voyageActivityBunkerInput: action.payload,
      };
      break;

    case Types.VOYAGE_BUNKER_SUBMIT:
      return {
        ...state,
        voyageActivityBunkerInput: initialState.voyageActivityBunkerInput,
        isLoading: false,
      };
      break;
    case Types.VOYAGE_BUNKER_SUBMITTING:
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
export default VoyageActivityBunkerReducer;
