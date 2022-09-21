import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { customersSlice } from "../app/modules/ECommerce/_redux/customers/customersSlice";
import { productsSlice } from "../app/modules/ECommerce/_redux/products/productsSlice";
import { remarksSlice } from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
import { specificationsSlice } from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";

/** 
| Domain : DCO
*/
import authMenuPermissionReducer from "../app/modules/Auth/_redux/menu-permission/authMenuPermissionReducer";
import ControllingUnitReducer from "../modules/employees/_redux/reducers/ControllingUnitReducer";
import EmployeeReducer from "../modules/employees/_redux/reducers/EmployeeReducer";
import EmployeeCrReducer from "../modules/employees/_redux/reducers/EmployeeCrReducer";
import EmployeeEducationReducer from "../modules/employees/_redux/reducers/EmployeeEducationReducer";
import EmployeeRecordReducer from "../modules/employees/_redux/reducers/EmployeeRecordReducer";
import EmployeeDocumentReducer from "../modules/employees/_redux/reducers/EmployeeDocumentReducer";
import EmployeeCertificateReducer from "../modules/employees/_redux/reducers/EmployeeCertificateReducer";
import EmployeeBankDetailsReducer from "../modules/employees/_redux/reducers/EmployeeBankDetailsReducer";
import EmployeeReferenceReducer from "../modules/employees/_redux/reducers/EmployeeReferenceReducer";
import AdditionDeductionReducer from "../modules/employees/_redux/reducers/AdditionDeductionReducer";
import EmployeeSigningReducer from "../modules/employees/_redux/reducers/EmployeeSigningReducer";
import PurchaseRequisitionReducer from "../app/modules/SupplyChain/Procurement/_redux/reducers/PurchaseRequisitionReducer";
import EmployeePromotionReducer from "../modules/employees/_redux/reducers/EmployeePromotionReducer";
import CurrencyReducer from "../modules/employees/_redux/reducers/CurrencyReducer";
import DemandReducer from "../modules/demand-sheet/redux/reducers/DemandReducer";
import VesselItemReducer from "../modules/VesselItem/_redux/reducers/VesselItemReducer";
import VoyageReducer from "../modules/voyage/_redux/reducers/VoyageReducer";
import VoyageActivityReducer from "../modules/voyage/_redux/reducers/VoyageActivityReducer";
import VoyageActivityBoilerReducer from "../modules/voyage/_redux/reducers/VoyageActivityBoilerReducer";
import VoyageActivityAuxEngnReducer from "../modules/voyage/_redux/reducers/VoyageActivityAuxEngnReducer";
import VoyageActivityBunkerReducer from "../modules/voyage/_redux/reducers/VoyageActivityBunkerReducer";
import VoyageActivityOfficerReducer from "../modules/voyage/_redux/reducers/VoyageActivityOfficerReducer";
import VoyageActivityAuxEngn2Reducer from "../modules/voyage/_redux/reducers/VoyageActivityAuxEngn2Reducer";
import VoyageActivityAuxEngn3Reducer from "../modules/voyage/_redux/reducers/VoyageActivityAuxEngn3Reducer";
import VesselAccountReducer from "../modules/vessel/_redux/reducers/VesselAccountReducer";
import VesselReducer from "../modules/vessel/_redux/reducers/VesselReducer";


/** 
| Domain : CCO
*/
// import authMenuPermissionReducer from "../app/modules/Auth/_redux/menu-permission/authMenuPermissionReducer";

export const rootReducer = combineReducers({
         auth: auth.reducer,
         customers: customersSlice.reducer,
         products: productsSlice.reducer,
         remarks: remarksSlice.reducer,
         specifications: specificationsSlice.reducer,

         /** Menu Reducers */
         menu: authMenuPermissionReducer,

         /** CCO Reducers */
         controllingUnit: ControllingUnitReducer,

         /** CCO Reducers */
         employeeInfo: EmployeeReducer,
         employeeEducationInfo: EmployeeEducationReducer,
         employeeRecordInfo: EmployeeRecordReducer,
         employeeDocumentInfo: EmployeeDocumentReducer,
         employeeCertificateInfo: EmployeeCertificateReducer,
         employeeBankDetailsInfo: EmployeeBankDetailsReducer,
         employeeReferenceInfo: EmployeeReferenceReducer,
         vesselInfo: VesselReducer,
         voyageInfo: VoyageReducer,
         voyageData: VoyageReducer,
         voyageActivityInfo: VoyageActivityReducer,
         VoyageActivityOfficerReducer: VoyageActivityOfficerReducer,
         additionDeductionInfo: AdditionDeductionReducer,
         vesselItemInfo: VesselItemReducer,
         employeeSigningInfo: EmployeeSigningReducer,
         currencyInfo: CurrencyReducer,
         vesselAccountInfo: VesselAccountReducer,
         VoyageActivityBoilerReducer: VoyageActivityBoilerReducer,
         voyageAux1: VoyageActivityAuxEngnReducer,
         voyageAux2: VoyageActivityAuxEngn2Reducer,
         voyageAux3: VoyageActivityAuxEngn3Reducer,

         /** Procurement Module Reducers */
         purchaseRequisition: PurchaseRequisitionReducer,
         demand: DemandReducer,
         employeeCrReducer : EmployeeCrReducer,

         /** Promotion */
         promotion: EmployeePromotionReducer,

         VoyageActivityBunkerReducer: VoyageActivityBunkerReducer,
       });

export function* rootSaga() {
  yield all([auth.saga()]);
}
