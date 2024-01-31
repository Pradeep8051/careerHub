import React, { useEffect, useState } from "react";
import JobCard from "../Component/JobCard";

import { Checkbox, Image, Select } from "antd";
import { Form } from "antd";
import Navbaar from "./Navbaar";
import Footer from "./Footer";
// import Carousel from "../Component/Carousel";
import { Carousel } from "antd";
import axios from "axios";
import { ApiEndPoint, BaseURL } from "../Constant/constant";

const HomePage = () => {

const [jobList, setJoblist]= useState("");

// let filter =jobList&& jobList.filter((i)=>i.jobType == "Full Time" )
// console.log("filter",filter)
// Filtering the jobList array
let PartTimeJobfilter = jobList && jobList.filter((i) => i.jobType === "Part Time");
let FullTimeJobfilter = jobList && jobList.filter((i) => i.jobType === "Full Time");
// console.log("filter------", filter,jobList);

useEffect(()=>{
  getJob()

},[])


const getJob = async()=>{

  const jobLists = await axios.get(ApiEndPoint.getJobsList).then((res)=>{
    console.log("jobList", res.data.savedJob)
    setJoblist(res.data.savedJob)
  }).catch((error)=>{
    console.log("error",error)

  })

}

  const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Navbaar />
      <div className="slider-area ">
        {/* <Carousel />
         <Carousel autoplay>
          <div>
            <Image
              // width={"100%"}
              // height={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/about.jpg")}
            />
          </div>
          <div>
            <Image
              width={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/sliderImge2.webp")}
            />
          </div>
          <div>
            <Image
              width={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/about.jpg")}
            />
          </div>
          <div>
            <Image
              width={"100%"}
              preview={false}
              src={require("../images/about.jpg")}
            />
          </div>
        </Carousel>  */}
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}> <Image
              width={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/about.jpg")}
            /></h3>
    </div>
    <div>
      <h3 style={contentStyle}> <Image
              width={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/about.jpg")}
            /></h3>
    </div>
    <div>
      <h3 style={contentStyle}> <Image
              width={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/about.jpg")}
            /></h3>
    </div>
    <div>
      <h3 style={contentStyle}> <Image
              width={"100%"}
              preview={false}
              className={"slider-height2 d-flex align-items-center"}
              src={require("../images/about.jpg")}
            /></h3>
    </div>
  </Carousel>
        {/* <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
        >
          <div className="container">
            <div className="row cards">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2> Home Pages</h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="row m-0 p-0 mb-4">
        <div className="col-md-3 col-12 ">
          <div className="p-2 mt-2 border rounded p-2 bg-white h-100 ">
            <div className="p-2">
              <div class="filterUi">
                <p>
                  <i
                    class="fa fa-filter text-primary me-2 "
                    aria-hidden="true"
                  ></i>

                  <span id="filter_ui_heading_desktop" class="heading_5">
                    Filters
                  </span>
                </p>
              </div>
              <Form
                layout="vertical"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
              >
                <Checkbox>
                  <p className="text-dark ">As per my preferences</p>
                </Checkbox>
                <Form.Item className="mb-1 fw-bold mt-1" label="Profile">
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Profile"
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
                <Form.Item className="mb-1 fw-bold mt-1 mb-3" label="Location">
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="e.g Delhi"
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>

                <Checkbox className="w-100 mb-2">
                  <p className="text-dark ">Work froomePage</p>
                </Checkbox>
                <Checkbox className="w-100 mb-2">
                  <p className="text-dark ">Part-time</p>
                </Checkbox>
                <Checkbox className="w-100 mb-2">
                  <p className="text-dark ">Include all internships</p>
                </Checkbox>
                <Form.Item
                  className="mb-1 fw-bold mt-1"
                  label="Years of experience"
                >
                  <Select
                    mode="tags"
                    style={{ width: "100%" }}
                    placeholder="Select Years of experience"
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
              </Form>
              <div>
                <p className="float-end text-primary  font-bold my-2 h-25">
                  Clear all
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="p-2 mt-2 border rounded p-2 bg-white  ">
            <div className="row">
              <div className="col-md-8 col-12">
                <h5 className="fw-bold mx-3 mt-3">Jobs</h5>
                <p className=" mx-3 mt-1">
                  as per your<span className="text-primary"> Preferences</span>
                </p>
              </div>
              <div className="col-md-4 col-12 pt-3">
                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="mt-n1 mb-0">All job</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="mt-n1 mb-0">Full Time</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-3"
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="mt-n1 mb-0">Part Time</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container-xxl   mb-5 job_card_h">
              <div className="container bg-white p-3">
                <div
                  className="tab-class text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                    

                      <JobCard data={jobList}  />
                   
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                      <JobCard  data={FullTimeJobfilter}/>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                      <JobCard data={PartTimeJobfilter} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
