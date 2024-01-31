import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import img1 from "../images/com-logo-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BaseURLImage } from "../Constant/constant";

const JobCard = (props) => {
  console.log("props.data", props.data);
  const navigate = useNavigate();
  //  useEffect(() => {
  //   goToJobDetails();
  // }, [])

  const goToJobDetails = (details) => {
    navigate("/JobDetails", { state: details });
  };

  return (
    <div>
      {props?.data &&
        props?.data?.map((i) => {
          return (
            <>
              <div className="job-item p-4 mb-4">
                <div className="row g-4 mb-3">
                  <div className="col-sm-12 col-md-8 d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid border rounded"
                      src={i?.image ? BaseURLImage+i?.image : img1}
                      alt=""
                      style={{ width: 80, height: 80 }}
                    />
                    <div className="text-start ps-4">
                      <h5 className="mb-3"> {i.nameDepartments}</h5>
                      <span className="text-truncate me-3">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        {i.openingType}
                      </span>
                      <span className="text-truncate me-3">
                        <i className="far fa-clock text-primary me-2" />
                        Full Time
                      </span>
                      <span className="text-truncate me-0">
                        <i className="far fa-money-bill-alt text-primary me-2" />
                        {i.opening}
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div className="d-flex mb-3">
                      <a className="btn btn-light btn-square me-3" href="">
                        <i className="far fa-heart text-primary" />
                      </a>
                      <button
                        onClick={() => goToJobDetails(i._id)}
                        className="btn btn-primary"
                      >
                        Apply Now
                      </button>
                    </div>
                    <small className="text-truncate">
                      <i className="far fa-calendar-alt text-primary me-2" />
                      {i.date}
                    </small>
                  </div>
                </div>
              </div>
            </>
          );
        })}

      {/* <div class="container">
    <div class="row mb-4">
        <div class="col-lg-12 col-md-12 mb-4">
            <div class="Jobcard hover-lift hover-shadow-xl shadow-sm border-0">
             
                <div class="card-body p-4">
          
                    <h6>Front-End Developer</h6>
                    <p class="mb-0 text-muted">124 Jobs opportunities</p>
                    <div className='border_b'></div>
                    <div>
                    
                    
                    
                  <p> <i class="fa fa-map-marker me-2" aria-hidden="true"></i>Noida</p>
                  <p className='fs_13'><i class="fa fa-money me-2" aria-hidden="true"></i>  <i class="fa fa-inr" aria-hidden="true"></i> 2,30,000- 4,00,000 /year</p>
                  <p className='fs_13'>
                  <i class="fa fa-briefcase me-2" aria-hidden="true"></i>
                <span className=''>45,500+ job/internship opportunities</span>
            </p>
                  <div className='w-100'>
                    <a className=' float-end mt-3 fs_13'>View Details</a>
                  </div>
                </div>

                </div>
         
           
                <a href="#!" class="stretched-link"></a>
            </div>
        </div>
   
    </div>
</div> */}
    </div>
  );
};

export default JobCard;
