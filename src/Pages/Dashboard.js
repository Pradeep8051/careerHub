import React, { useEffect, useState } from 'react';
import {  Input, Popconfirm } from "antd";

import { Space, Tag, Table , Button} from 'antd';

import { EyeOutlined } from '@ant-design/icons'; 
import { Link, useNavigate } from 'react-router-dom';
import Navbaar from './Navbaar';
import  {UserToken, UserRole } from '../Component/UserToken';
import axios from 'axios';
import { ApiEndPoint } from '../Constant/constant';

// [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const EmployerDashboard = () => {
  
  const UserRoles = UserRole();
  

  let navigate = useNavigate();
  const [appliedJoblist, setAppliedJoblist] = useState([]);
  useEffect(() => {
    Joblist();
  }, []);
  console.log("appliedJoblist---------", appliedJoblist);

  const columns = [
    {
      title: 'Departments',
      dataIndex: 'Departments',
      key: 'Departments',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'OpeningType',
      dataIndex: 'OpeningType',
      key: 'OpeningType',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Opening',
      dataIndex: 'Opening',
      key: 'Opening',
    },
    {
      title: 'JobType',
      dataIndex: 'JobType',
      key: 'JobType',
    },
    {
      title: 'Experience',
      dataIndex: 'Experience',
      key: 'Experience',
    },
    {
      title: 'feeType',
      dataIndex: 'feeType',
      key: 'feeType',
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
    },
    // ApplidJobList
    // {
    //   title: 'feeType',
    //   key: 'feeType',
    //   dataIndex: 'feeType',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags && tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: 'View Details',
      keys: 'keys',
      key: 'keys',
      render: (Edit, record) => (
        <Space size="middle">
        {/* <Link to={`/JobDetails?jobId=${Edit.keys}`}> */}
        <Button onClick={()=> navigate("/JobDetails", { state:Edit.keys })} icon={<EyeOutlined />} type="link"  />
        {/* </Link> */}
      </Space>
      ),
    },
    // {
    //   title: 'Applicant List',
    //   keys: 'keys',
    //   key: 'keys',
    //   render: (Edit, record) => (
    //     <Space size="middle">
    //     {/* <Link to={`/JobDetails?jobId=${Edit.keys}`}> */}
    //     <Button onClick={()=> navigate("/ApplidJobList", { state:Edit.keys })} icon={<EyeOutlined />} type="link"  />
    //     {/* </Link> */}
    //   </Space>
    //   ),
    // },
  ];

  if(UserRoles == "employer"){
  columns.push({
    title: 'Edit',
    keys: 'keys',
    key: 'keys',
    render: (Edit, record) => (
      <Link to={`/EmployerRegisterSetp2?jobId=${Edit.keys}`}>
      <span className="material-icons fs-4 link-success">edit</span>
    </Link>
     
    ),
  })
  columns.push({
    title: 'Applicant List',
    keys: 'keys',
    key: 'keys',
    render: (Edit, record) => (
      <Space size="middle">
      {/* <Link to={`/JobDetails?jobId=${Edit.keys}`}> */}
      <Button onClick={()=> navigate("/ApplidJobList", { state:Edit.keys })} icon={<EyeOutlined />} type="link"  />
      {/* </Link> */}
    </Space>
    ),
  })
  }


  console.log("appliedJoblist----d-d-d-", appliedJoblist);

  const data = appliedJoblist &&  appliedJoblist
    ? appliedJoblist.map((job) => ({
        keys: job._id,
        Departments:job.nameDepartments,
        OpeningType: job.openingType,
        Opening: job.opening,
        JobType: job.jobType,
        Experience: job.experience,
        feeType: job.feeType,
        Date:job.date
        // Add other fields if necessary
      }))
    : [];

  const Joblist = async () => {
    try {
      const UserTokens =await UserToken();
      const Roles = await UserRole();
      // Fetch job data using Axios
      console.log("UserTokens------",Roles,UserTokens)
      let methodCall= UserRoles == "employer" ?ApiEndPoint.getCreatedJobs :ApiEndPoint.getAppliedJobs 
    const response = await axios.get(methodCall, {
      headers: {
        Authorization: UserTokens,
        'Content-Type': 'application/json',
      },
    });


      // Set the fetched job list to state
      setAppliedJoblist(response.data.jobs);
    } catch (error) {
      console.log('Error fetching job list:', error);
    }
  };
  return (
    <div>
      <Navbaar />
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-md-12 col-12 mt-2">
            <h5 className="p-2 mt-2 float-start"> {UserRoles != "employee" ? "Employer dashboard" :"Employee dashboard"}</h5>
            {
              UserRoles != "employee" ? 
            
            <Button
              onClick={() => navigate("/EmployerRegisterSetp2")}
              className="float-end bg-primary text-white me-4"
            >
              Add Opening
            </Button>
            :""}
          </div>
          <div className="col-md-12 col-12">
            <div className="card my-2 mt-1  p-3 ">
              <div className="row">
                <div className="col-md-12 col-12">
                  <Table
                    scroll={{ x: "300" }}
                    columns={columns}
                    dataSource={data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
