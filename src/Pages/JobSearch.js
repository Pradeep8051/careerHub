import React, { useEffect, useState } from "react";
import { Button, Input, Popconfirm } from "antd";

import { Space, Tag, Table } from "antd";
import { useNavigate } from "react-router-dom";
import Navbaar from "./Navbaar";
import JobCard from "../Component/JobCard";
import axios from "axios";
import { ApiEndPoint } from "../Constant/constant";

const JobSearch = () => {
  let navigate = useNavigate();
  const [ViewMasterAllUser, setViewMasterAllUser] = useState("");

  const [jobList, setJoblist] = useState("");

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    const jobLists = await axios
      .get(ApiEndPoint.getJobsList)
      .then((res) => {
        console.log("jobList", res.data.savedJob);
        setJoblist(res.data.savedJob);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <Navbaar />

      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
        >
          <div className="container">
            <div className="row cards">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2> Job Search Results</h2>
                  <div action="#" className="serach-form-area">
                    <div className="row justify-content-center form-wrap">
                      <div className="col-lg-4 form-cols">
                        <select
                          class="form-select form-select-sm default-sel"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>I AM SEARCHING </option>
                          <option> Practice Internship</option>
                          <option> Training Program / Course</option>
                          <option> Online Programs</option>
                          <option> Certification Course</option>
                          <option> Fellowship/scholarships</option>
                          <option> Events </option>
                          <option> Diploma Course</option>
                          <option> Bachelor Degree</option>
                          <option> Master Degree</option>
                          <option> Jobs</option>
                          <option> Business Proposal</option>
                        </select>
                      </div>
                      <div className="col-lg-3 form-cols">
                        <div className="default-select" id="default-selects">
                          <select
                            class="form-select form-select-sm default-sel"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>In Industry </option>
                            <option value="1">Health</option>
                            <option value="2">Software Engineering</option>
                            <option value="3">Database</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 form-cols">
                        <div className="default-select" id="default-selects2">
                          <select
                            class="form-select form-select-sm default-sel"
                            aria-label=".form-select-sm example"
                          >
                            <option value={1}>In City </option>
                            <option value={2}>Medical</option>
                            <option value={3}>Technology</option>
                            <option value={4}>Goverment</option>
                            <option value={5}>Development</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 form-cols">
                        <button type="button" className="btn btn-info">
                          <span className="lnr lnr-magnifier" /> Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-12 col-12">
          <div className="p-2 mt- border rounded p-2 bg-white job_card_h ">
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
                    >
                      <h6 className="mt-n1 mb-0">Featured</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <h6 className="mt-n1 mb-0">Full Time</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <h6 className="mt-n1 mb-0">Part Time</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container-xxl   ">
              <div className="container bg-white p-3">
                <div
                  className="tab-class text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                      <JobCard data={jobList} />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                      <JobCard />
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                      <JobCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
