import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiEndPoint } from "../Constant/constant";
import axios from "axios";
import { Table } from "antd";
import Navbaar from "./Navbaar";

function ApplidJobList() {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;
  const GetToken = sessionStorage.getItem("loginToken");

  const [JobDetails, setJobDetails] = useState([]);
  console.log("JobDetails--------------4", JobDetails);
  useEffect(() => {
    const detailsid = location.state;
    console.log("detailsid------4", detailsid);
    UserEditDetails(detailsid);

    // setJobDetails(details);
  }, [location]);
  const UserEditDetails = (jobId) => {
    console.log("jobId", jobId);
    let payload = {
      jobId: jobId,
    };

    axios
      .post(ApiEndPoint.getUserListAppliedJob, payload, {
        headers: {
          Authorization: GetToken,
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        console.log("POST Request Response:", response.data.userList);
        setJobDetails(response?.data?.userList);

        // toast.success("step 2 complete");
        // navigate("/Dashboard");
      })
      .catch((error) => {
        // toast.error(error?.response?.data?.message);
        console.error(
          "Error making POST request:",
          error
          // error?.response?.data?.message
        );
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone No",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    }
  ];
  // const data = JobDetails &&  JobDetails
  // ? JobDetails.map((job) => ({
  //     keys: job._id,
  //     name:job.name,
  //     OpeningType: job.openingType,
  //     Opening: job.opening,
  //     JobType: job.jobType,
  //     Experience: job.experience,
  //     feeType: job.feeType,
  //     Date:job.date
  //     // Add other fields if necessary
  //   }))
  // : [];

  return (
    <div>
    <Navbaar />
      <div className="card my-2 mt-1  p-3 ">
        <div className="row">
          <div className="col-md-12 col-12">
            <Table
              scroll={{ x: "300" }}
              columns={columns}
              dataSource={JobDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplidJobList;
