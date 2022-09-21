import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { RHFInput } from "react-hook-form-input";
import Select from "react-select";
import { GetCargoTypeList, GetPortList, SaveDemandEntry,GetDemandSheetDetByID, SaveDemandApproveEntry } from "../redux/actions/DemandAction";
import { checkObjectInArray } from '../../employees/utils/Helper';
import { showToast } from '../../master/utils/ToastHelper';
import { GetCountryDataAction } from "../../vessel/_redux/actions/VesselAction";

const CargoPendingDetails = withRouter(({ history, props }) => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const dispatch = useDispatch();
  toast.configure();

  const { dteLayCanFromDate, dteLayCanToDate, dteETADateFromLoadPort, dteETADateToLoadPort, strComments, decGrandQuantity, intCountryID,intID, strCountry, intPortFrom, strPortFrom,intPortTo, strPortTo} = props.location.state.pendingList;

  console.log("state date",props.location.state.pendingList);

  const [state, setState] = React.useState({
    strType: "",
    cargoType: null,
    fromDate: "",
    toDate: "",
    countryData: {
      // value: intCountryID,
      // label: strCountry
    },
    fromPortData: {
     
    },
    portTo: {
     
    },
    quantity: "",
    etaDateLoadPort: "",
    etaDateCtgPort: "",
    remarks: "",
    selectedCargo: null,
    multipleList: [],
    intDemandsheetid:0,

  });

  const handleChange = ({ currentTarget: input }) => {
    const employeeInfoData = { ...state };
    employeeInfoData[input.name] = input.value;
    setState(employeeInfoData);
  };

  const selectHandle = (data) => {
    const additionData = { ...state };
    additionData.cargoType = data;
    setState(additionData);
  };
  const selectCountry = (data) => {
    const additionData = { ...state };
    additionData.strCountry = data;
    setState(additionData);
  };
  const selectPortTo = (data) => {
    const additionData = { ...state };
    additionData.portTo = data;
    setState(additionData);
  };
  const selectPortFrom = (data) => {
    const additionData = { ...state };
    additionData.portFrom = data;
    setState(additionData);
  };

  const addStatus = useSelector(
    (state) => state.demand.addStatus
  );

  const addMessage = useSelector(
    (state) => state.demand.addMessage
  );

  const cargoListData = useSelector((state) => state.demand.cargoList);
  const countryList = useSelector((state) => state.vesselInfo.countryList);
  const portListData = useSelector((state) => state.demand.portList);
  // const portListData = useSelector((state) => state.demand.portList);
  // const pendingDetaillsList = useSelector((state) => state.demand.pendingDetaillsList);
  const [attachmentPreview, setAttachmentPreview] = useState(null);


// console.log("pendingDetaillsList",pendingDetaillsList);

  useEffect(() => {

    const countryData = {
      value: intCountryID,
      label: strCountry
    };
    const fromPortData = {
      value: intPortFrom,
      label: strPortFrom,
    };

    const portTo = {
      value: intPortTo,
      label: strPortTo,
    };

    console.log("propsdate", props);
    console.log("intID", intID);
    setValue('countryData', countryData);
    setValue('fromPortData', fromPortData);
    setValue('fromPortData', fromPortData);
    // setValue('fromPortData', fromPortData);
    console.log(dteLayCanFromDate);
    // dispatch(GetDemandSheetDetByID(intID));
   intializeData();
    dispatch(GetCargoTypeList());
    dispatch(GetCountryDataAction());
    dispatch(GetPortList());
    

    // dispatch(GetApprovePendingList());
    if (addStatus && addMessage.length > 0) {
      const updatedData = {
        strType: "",
        cargoType: null,
        fromDate: dteLayCanFromDate,
        toDate: dteLayCanToDate,
        strCountry: null,
        quantity: decGrandQuantity,
        etaDateLoadPort: dteETADateFromLoadPort,
        etaDateCtgPort: dteETADateToLoadPort,
        remarks: strComments,
        selectedCargo: null,
        multipleList: [],
        portFrom: null,
        portTo: null,
        attachment: null,
        intDemandsheetid:intID,

      }
      setState(updatedData);
    }

   


    // setValue("vesselTypeData", vesselTypeData);
    setValue("strCountry", strCountry);
    setValue("portFrom", portFrom);
    setValue("portTo", portTo);
    
    
  }, [addStatus, addMessage]);


  const intializeData =async ()=>{
    let demandDetails = await GetDemandSheetDetByID(intID);
    let cloneObj = { ...state };
    cloneObj.fromDate = dteLayCanFromDate;
    cloneObj.toDate = dteLayCanToDate;
    cloneObj.etaDateLoadPort = dteLayCanFromDate;
    cloneObj.etaDateCtgPort = dteLayCanToDate;
    cloneObj.quantity = decGrandQuantity;
    cloneObj.remarks = strComments;
    cloneObj.multipleList = demandDetails.data.details;
    cloneObj.intDemandsheetid = intID;
    setState(cloneObj);

    console.log('demandDetails',demandDetails);
  }

  const addMultipleValue = (e) => {
    // if (state.cargoType === null) {
    //   showToast('error', 'Please select an item !');
    //   return false;
    // }
    if (state.strCountry === null) {
      showToast('error', 'Please select a country !');
      return false;
    }
    if (state.quantity === null || state.quantity === "0" || state.quantity === 0) {
      showToast('error', 'Please give a quantity greater than 0');
      return false;
    }
    let multipleList = [];
    const cloneObj = { ...state };
    let demandDataObj = {
      intItemId: state.cargoType.value,
      strItemName: state.cargoType.label,
      intQuantity: state.quantity,
      fromDate: state.fromDate,
      toDate: state.toDate
    };

    if (
      !checkObjectInArray(
        demandDataObj,
        state.multipleList,
        "intItemId"
      )
    ) {
      cloneObj.multipleList.push(demandDataObj);
      setState(cloneObj)
    } else {
      showToast('error', 'select another Item');
      return false;
    }

  };

  let country = [];
  if (countryList) {
    countryList.data.forEach((item) => {
      let items = {
        value: item.intID,
        label: item.strName,
      };
      country.push(items);
    });
  }

  let cargoTypes = [];
  if (typeof cargoListData !== 'undefined' && cargoListData !== null) {
    cargoListData.forEach((item) => {
      let items = {
        value: item.intID,
        label: item.strItemName,
      };
      cargoTypes.push(items);
    });
  }
  let portFrom = [];
  if (typeof portListData !== 'undefined' && portListData !== null) {
    portListData.forEach((item) => {
      let items = {
        value: item.intPortId,
        label: item.strPortName,
      };
      portFrom.push(items);
    });
  }

  const onSubmit = (e) => {
    // if (state.cargoType === null) {
    //   showToast('error', 'Please select an item !');
    //   return false;
    // }
    if (state.strCountry === null) {
      showToast('error', 'Please select a country !');
      return false;
    }
    if (state.quantity === null || state.quantity === "0" || state.quantity === 0) {
      showToast('error', 'Please give a quantity greater than 0');
      return false;
    }
    dispatch(SaveDemandApproveEntry(state));
  };

  const deleteMultipleList = (data) => {
    console.log(' state.multipleList', state.multipleList);
    console.log('data', data);
    let cloneObj = { ...state };
    let deleteMultiple = state.multipleList.filter(item => item.intItemId !== data.intItemId);
    cloneObj.multipleList = deleteMultiple;
    setState(cloneObj);

  }
  

  const handleChangeTextInput = (name, value, e = null) => {
    let data = {
      name: name,
      value: value,
    }

    let reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      if (name === "attachment") {
        data.name = 'bannerPreviewUrl';
      }
      data.value = reader.result;
      setAttachmentPreview(data.value);
      // data.value = reader.result;
      console.log('attachmentPreview', attachmentPreview);
    }
    reader.readAsDataURL(file)
  }

  const deleteBrandsImage = () => {
    setAttachmentPreview(null);
  }

  console.log(state);

  return (
    <form
      className="form form-label-right"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
      <div className="form-group row">
        <div className="col-lg-4">
          <label className="form-label">Material Name</label>
          <div>
            <RHFInput
              as={<Select options={cargoTypes} />}
              rules={{ required: false }}
              name="cargoType"
              register={register}
              value={state.cargoType != null ? state.cargoType.label : ''}
              onChange={selectHandle}
              setValue={setValue}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="form-label">Laycan From Date</label>
          <Form.Control
            type="date"
            placeholder="Enter Result "
            name="fromDate"
            className="fromStyle"
            onChange={handleChange}
            value={state.fromDate}
          // ref={register({
          //   required: false,
          //   maxLength: 100,
          // })}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label">Laycan To Date</label>
          <Form.Control
            type="date"
            name="toDate"
            className="fromStyle"
            onChange={handleChange}
            value={state.toDate}
          // ref={register({
          //   required: false,
          //   maxLength: 100,
          // })}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label">Country</label>
          <div>
            <RHFInput
              as={<Select options={country} />}
              // rules={{ required: false }}
              name="countryData"
              register={register}
              value={state.strCountry}
              onChange={selectCountry}
              setValue={setValue}
            />
          </div>
        </div>

        {/* <div className="col-lg-4">
          <label className="form-label">Port From</label>
          <div>
            <RHFInput
              as={<Select options={portFrom} />}
              // rules={{ required: false }}
              name="portFrom"
              register={register}
              value={state.portFrom != null ? state.portFrom.label : ''}
              onChange={selectPortFrom}
              setValue={setValue}
            />
          </div>
        </div>
 */}


        <div className="col-lg-4">
          <label className="form-label">Port From</label>
          <div>
            <RHFInput
              as={<Select options={portFrom} />}
              // rules={{ required: false }}
              name="fromPortData"
              register={register}
              value={state.fromPortData}
              onChange={selectPortFrom}
              setValue={setValue}
            />
          </div>
        </div>

        <div className="col-lg-4">
          <label className="form-label">Port To</label>
          <div>
            <RHFInput
              as={<Select options={portFrom} />}
              rules={{ required: false }}
              name="portTo"
              register={register}
              value={state.portTo != null ? state.portTo.label : ''}
              onChange={selectPortTo}
              setValue={setValue}
            />
          </div>
        </div>

        <div className="col-lg-4">
          <label className="form-label">Quantity</label>
          <Form.Control type="number" placeholder="Quantity "
            name="quantity"
            className="fromStyle"
            onChange={handleChange}
            value={state.quantity}
          // ref={register({
          //   required: false,
          //   maxLength: 100,
          // })}
          />
        </div>

        <div className="col-lg-4">
          <label className="form-label">ETA Date(Load Port)</label>
          <Form.Control
            type="date"
            placeholder="Enter Result"
            name="etaDateLoadPort"
            className="fromStyle"
            onChange={handleChange}
            value={state.etaDateLoadPort}
          // ref={register({
          //   required: false,
          //   maxLength: 100,
          // })}
          />
        </div>
        <div className="col-lg-4">
          <label className="form-label">ETA Date(Discharge Port)</label>
          <Form.Control
            type="date"
            name="etaDateCtgPort"
            className="fromStyle"
            onChange={handleChange}
            value={state.etaDateCtgPort}
          // ref={register({
          //   required: false,
          //   maxLength: 100,
          // })}
          />
        </div>

        <div className="col-lg-4">
          <label className="form-label">Remarks</label>
          <Form.Control
            type="text"
            placeholder="Enter Remarks "
            name="remarks"
            onChange={handleChange}
            value={state.remarks}
          // ref={register({
          //   required: false,
          //   maxLength: 100,
          // })}
          />
        </div>
        {/* <div className="col-lg-4">
          <label className="form-label mt-2">
            Attachment
                    <span className="text-info text-sm">(Optional)</span>
          </label>
          <Form.Control
            type="file"
            placeholder="Enter Banner Image"
            name="banner"
            className="fromStyle"
            onChange={(e) => handleChangeTextInput('attachment', e.target.files[0], e)}
            ref={register({
              required: false,
              maxLength: 100,
            })}
          />
        </div> */}

        <div className="mt-4">
          <div className="from-group mt-5">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg "
              onClick={() => addMultipleValue()}
            >
              <i className="fa fa-plus-circle"></i>Add
                    </button>
          </div>
        </div>

        <div className="col-md-4">
          {
            attachmentPreview !== null &&
            <div className="imgPreview" title="Remove">
              <i className="fa fa-times text-danger text-right" onClick={() => deleteBrandsImage()}></i>
              <img src={attachmentPreview} className="img img-thumbnail" />

            </div>
          }
        </div>
      </div>

      <div className="react-bootstrap-table table-responsive mt-3 ">
        <table className="table table table-head-custom table-vertical-center">
          <thead>
            <tr>
              <td>SL</td>
              
              <td>Material Name</td>
              <td>Quantity</td>
              <td>Create Date</td>
              <td>To Date</td>
              <td>Delete</td>
              {/* <td>Country</td>
                     
                      <td>ETA Date(Load Port)</td>
                      <td>ETA Date(CTG Port)</td>
                      <td>Remarks</td> */}
            </tr>
          </thead>
          <tbody>
            {
               typeof state.multipleList !== 'undefined'  && state.multipleList.map((item, index) => (
                <tr key={index}>
                   <td>{++index}</td>
                  <td>{item.strItemName}</td>
                  <td>{item.intQuantity}</td>
                  <td>{dteLayCanFromDate}</td>
                  <td>{dteLayCanToDate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-elevate"
                      onClick={() => deleteMultipleList(item)}
                    >
                      Delete
                      </button>
                  </td>
                </tr>

              ))
            }

          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="from-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg demandBtn"
          >
            Approve
          </button>
        </div>

        <div className="from-group ml-3">
          <button
            type="button"
            className="btn btn-danger btn-lg demandBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
});

export default CargoPendingDetails;
