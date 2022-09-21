import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { toast } from 'react-toastify';




const EmployeeCrReportList = withRouter(({ history, props }) => {
    const dispatch = useDispatch();
    const [isAddMode, setIsAddMode] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [editActiveEducation, setEditActiveEducation] = useState(undefined);
    const [records, setRecords] = useState({});

    toast.configure();
    const employeeEducationDetails = useSelector((state) => state.employeeInfo.employeeInfoDetails);
    console.log('employeeEducationDetails', employeeEducationDetails);

    useEffect(() => {
        // dispatch(GetEmployeeDetails(props.match.params.intEmployeeId));
    }, []);

    return (
        <>
            <div className="container">
                <div className="card card-custom gutter-b">
                    <div className="table-responsive mt-3 table-list">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Course Name</th>
                                    <th>Issued By</th>
                                    <th>Number</th>
                                    <th>Issue Date</th>
                                    <th>Expiry Date</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* {typeof employeeEducationDetails != 'undefined' && employeeEducationDetails.certificates.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.strCourseName}</td>
                                        <td>{item.strIssueBy}</td>
                                        <td>{item.strNumber}</td>
                                        <td>{item.strIssueDate}</td>
                                        <td>{item.strExpiryDate}</td>
                                       
                                       
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
});

export default EmployeeCrReportList;
