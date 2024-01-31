import React, { useEffect, useState } from 'react';
import icons from "../images/job-list1.png";
import Navbaar from '../Pages/Navbaar';
import Footer from '../Pages/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApiEndPoint, BaseURLImage } from '../Constant/constant';
import { ToastContainer, toast } from 'react-toastify';

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;
 
  const GetToken = sessionStorage.getItem("loginToken");

  const [JobDetails, setJobDetails] = useState("");
  console.log("JobDetails",JobDetails)
  useEffect(() => {
    const detailsid = location.state;
    console.log("detailsid",detailsid,location)
    UserEditDetails(detailsid)
    
    
    setJobDetails(details||detailsid);
  }, [location]);
  
  const UserEditDetails = (jobId)=>{
    console.log("jobId",jobId)
    let payload ={
      jobID:jobId
  }
    axios.post(ApiEndPoint.getJobDetail, payload, {
      headers: {
        Authorization: GetToken,
        "Content-Type": "application/json",
      },
    })
    .then(async (response) => {
      console.log("POST Request Response:", response.data.savedJob);
      setJobDetails(response.data.savedJob)

      // toast.success("step 2 complete");
      // navigate("/Dashboard");
    })
    .catch((error) => {
      // toast.error(error?.response?.data?.message);
      console.error(
        "Error making POST request:",error
        // error?.response?.data?.message
      );
    });
};

  const jobApply = async (e) => {
    // e.preventDefault();

    const jobDetails = {
      job: JobDetails?._id, // Assuming JobDetails?._id is the correct identifier for the job
    };
    console.log("jobDetails-----0",jobDetails)
    try {
      const response = await axios.post(
        ApiEndPoint.appliedJob,
        { applied: [jobDetails] },
        {
          headers: {
            Authorization: GetToken,
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the response here
      console.log('Application submitted:', response.data.message);
      toast.success(`job successfully applied`);
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };



  return (
    <>
      <Navbaar />
      {/* Hero Area Start*/}
    
      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
        >
          <div className="container">
            <div className="row cards">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Job Details</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}

      {/* job post company Start */}
      <div className="job-post-company pt-120 pb-120 bg-white">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left Content */}
            <div className="col-xl-7 col-lg-8">
              {/* job single */}
              <div className="single-job-items mb-50 mt-">
                <div className="job-items">
                  <div className="company-img company-img-details">
                    <a href="#">
                      <img src={JobDetails?.image ? BaseURLImage+JobDetails?.image : icons} width={"20%"} height={"15%"} alt="" />
                    </a>
                  </div>
                  <div className="job-tittle">
                    <a href="#">
                      <h4>{JobDetails?.nameDepartments}</h4>
                    </a>
                    <ul>
                      <li>{JobDetails?.openingType}</li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        {JobDetails?.user?.country ?`${JobDetails?.user?.city}, ${JobDetails?.user?.country}` : "Athens, Greece"}
                      </li>
                      <li>{JobDetails?.feeType=="Paid" ? `$ ${JobDetails?.paidAmt}`: `$ ${JobDetails?.stipend}`}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* job single End */}
              <div className="job-post-details">
                <div className="post-details1 mb-4">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Job Description</h4>
                  </div>
                  <p>{JobDetails?.description}</p>
                </div>
                <div className="post-details2  mb-3">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Required Knowledge, Skills, and Abilities</h4>
                  </div>
                  <ul>
                    <li>System Software Development</li>
                    <li>
                      Mobile Applicationin iOS/Android/Tizen or other platform
                    </li>
                    <li>Research and code , libraries, APIs and frameworks</li>
                    <li>Strong knowledge on software development life cycle</li>
                    <li>Strong problem solving and debugging skills</li>
                  </ul>
                </div>
                <div className="post-details2  mb-50">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Education + Experience</h4>
                  </div>
                  <ul>
                    <li>3 or more years of professional design experience</li>
                    <li>Direct response email experience</li>
                    <li>Ecommerce website design experience</li>
                    <li>Familiarity with mobile and web apps preferred</li>
                    <li>Experience using Invision a plus</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="col-xl-4 col-lg-4 ">
              <div className="post-details3  mb-50 mt-3">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Job Overview</h4>
                </div>
                <ul>
                  <li>
                    Posted date : <span>{JobDetails?.date}</span>
                  </li>
                  <li>
                    Location : <span>{JobDetails?.user?.location}</span>
                  </li>
                  <li>
                    Vacancy : <span>{JobDetails?.opening}</span>
                  </li>
                  <li>
                    Job nature : <span>{JobDetails?.jobType}</span>
                  </li>
                  <li>
                    Salary : <span>{JobDetails?.feeType=="Paid" ? `$ ${JobDetails?.paidAmt}`: `$ ${JobDetails?.stipend}`}</span>
                  </li>
                  <li>
                    Application date : <span>{JobDetails?.date}</span>
                  </li>
                </ul>
                <div className="apply-btn2">
                  <button onClick={ ()=> {
                    if(GetToken){
                      jobApply()
                    }else{
                    // toast.error("please insert login page")
                      navigate("../../Login")
                    }
   }
                  }
                  className="btn btn-primary ">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="post-details4  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Company Information</h4>
                </div>
                <span>Colorlib</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <ul>
                  <li>
                    Name: <span>Colorlib </span>
                  </li>
                  <li>
                    Web : <span> colorlib.com</span>
                  </li>
                  <li>
                    Email: <span>carrier.colorlib@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job post company End --
       */}
      <Footer />
    </>
  );
};

export default JobDetails;
