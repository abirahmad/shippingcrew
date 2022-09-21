import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { GetLastVoyageByVesselId } from "../_redux/actions/VoyageAction";
import { getVesselId } from "../../../app/modules/Auth/_redux/authCrud";
import { GetVesselList } from "../../vessel/_redux/actions/VesselAction";
import { useParams } from "react-router-dom";
import VoyageShortHeaderEdit from "../components/voyage-activity/edit/EditComponents/VoyageShortHeaderEdit";
import VoyageActivityEdit from "../components/voyage-activity/edit/EditView/VoyageActivityEdit";

const VoyageActivityEditContainer = (props) => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const [vesselId, setVesselId] = useState(null);
  const vesselListOptions = useSelector(
    (state) => state.vesselInfo.vesselListOptions
  );

  useEffect(() => {
    const vesselId = getVesselId();
    setVesselId(vesselId);

    if (vesselId !== null) {
      dispatch(GetLastVoyageByVesselId(vesselId));
    } else {
      dispatch(GetVesselList());
    }
  }, []);

  useEffect(() => {
    dispatch(GetVesselList());
  }, []);

  const voyageData = useSelector((state) => state.voyageInfo.lastVoyageData);

  // Get ID by calling last voyage of this vessel
  // Updated

  return (
    <div className="container">
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <div className="card-title">
            <h3 className="card-label">Voyage Activity Edit</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-4 ml-2">
            {(vesselId === null || vesselId === "") && (
              <Select
                options={vesselListOptions}
                onChange={(option) => {
                  dispatch(GetLastVoyageByVesselId(option.value));
                }}
              />
            )}
          </div>
        </div>

        {voyageData !== null && (
          <>
            <VoyageShortHeaderEdit voyageData={voyageData} />
            {/* <VoyageActivityEdit id={id} /> */}
            <VoyageActivityEdit id={voyageData.intID} activityID={id} />
          </>
        )}
        {voyageData === null && (
          <h4 className="container text-center">Loading Data...</h4>
        )}
      </div>
    </div>
  );
};

export default VoyageActivityEditContainer;
