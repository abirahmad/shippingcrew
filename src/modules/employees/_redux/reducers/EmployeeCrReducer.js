import * as Types from "../../types/Types";
import { checkObjectInArray } from "../../utils/Helper";

const initialState = {
    textBoxShow: false,
    isLoading:false,
    submitStatus:false,
    inputData: {
        intEmployeeId: 1,
        intRankId: 1,
        intVesselId: 1,
        dteFromDate: "2020-09-09",
        dteToDate: "2020-09-09",
        strReasonOfAppraisal: "Crew sign off",
        strOverallPerformance: "Outstanding",
        ysnPromotionRecomanded: 1,
        ysnFurtherRecomanded: 1,
        strPromotionRecomandedDate: "2020-09-09",
        strFurtherRecomandedDate: "2020-09-09",
        strMasterSign: "Crew sign off",
        strCESign: "Crew sign off",
        options: [
        ]
    },
    criteriaList: [],
    appraisalList: []
};

const EmployeeCrReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.GET_EMPLOYEE_CRITERIA:
            console.log('action.payload.data', action.payload);
            return {
                ...state,
                criteriaList: action.payload.data,
                isLoading:action.payload.isLoading
            };
        case Types.EMPLOYEE_REASON_OF_APPRAISAL:
            return {
                ...state,
                appraisalList: action.payload,
            };
        case Types.EMPLOYEE_CR_REPORT_SUBMIT:
            console.log('action.payload', action.payload);
            return {
                ...state,
                submitStatus:action.payload.isLoading
               
            };
        case Types.GET_EMPLOYEE_DETAILS_BY_ID:
            let cloneEmployee = { ...state.inputData };
            cloneEmployee.intEmployeeId = 1
            cloneEmployee.intRankId = parseInt(action.payload.intRankId);
            cloneEmployee.intVesselId = parseInt(action.payload.intVesselID)
            cloneEmployee.strRank = action.payload.strRank
            cloneEmployee.strVesselName = action.payload.strVesselName
            return {
                ...state,
                inputData: cloneEmployee,
            };
        case Types.SELECT_REASON_OF_APPRAISAL:
            let cloneInput = { ...state.inputData };
            cloneInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                textBoxShow: action.payload.value == "Other" ? true : false,
                inputData: cloneInput
            };
        case Types.GET_EMPLOYEE_CRITERIA_SELECT:
            let cloneSelectCriteria = { ...state.inputData };
            let newCriteria = { ...state.inputData };

            let newCriteriaObj = {
                intOptionMainId: 1,
                strOptionValue: "Hello",
                ysnIsChecked: 1
            }

            let indexParentCriteria = action.payload.indexParentCriteria;

            newCriteriaObj.intOptionMainId = action.payload.parentCriteria.intID;
            let indexChild = action.payload.indexChild;
            let cloneObj = state.criteriaList.slice();
            let j = 0;
            for (let i = 0; i < cloneObj.length; i++) {
                if (i == indexParentCriteria) {
                    for (let c = 0; c < cloneObj[i].options.length; c++) {
                        const element = cloneObj[i].options[c];
                        // console.log('element', element);
                        cloneObj[i].options[c].ysnChecked = 0

                        // check already an entry for this parentCriteria.intID, if entry, then remove those data / or update that data
                        console.log('newCriteriaObj.intCriteriaMainId', newCriteriaObj.intCriteriaMainId);
                        console.log('action.payload.parentCriteria.intID', action.payload.parentCriteria.intID);
                        if (indexChild == c) {
                            cloneObj[i].options[c].ysnChecked = !cloneObj[i].options[c].ysnChecked;

                        }
                    }
                }
                console.log('newCriteria', newCriteria);
            }


            return {
                ...state,
                criteriaList: cloneObj,
            };


        default:
            break;
    }
    return newState;
};
export default EmployeeCrReducer;
