import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";

const Navbaar = () => {
  let navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    getToken();
  });
  let userNameData = sessionStorage.getItem("userName");

  async function getToken() {
    let token = await sessionStorage.getItem("loginToken");

    console.log("token-----", token);
    if (token) {
      setLogin(true);
    }
  }
  const Logout = async () => {
    await sessionStorage.clear();
    toast.warning("Successfully Logout");
    navigate("/");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg  r skill-bg h-25 m-0 p-0">
        <ToastContainer />
        <div class="container-fluid">
          <div className="w-100">
            <a class="navbar-brand text-white" href="/">
              <Image
                // width={"50%"}
                height={"45px"}
                preview={false}
                // className={"slider-height2 d-flex align-items-center"}
                src={require("../images/Website Logos.png")}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <nav> */}
          </div>
          <div class="collapse navbar navbar-collapse" id="navbarNav">
            <ul class="navbar-nav links">
              <li class="nav-item">
                <Link class="nav-link  text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="mt-3 ms-3 active ">
                  Industry
                </a>
                <i class="bx bxs-chevron-down htmlcss-arrow arrow  "></i>
                <ul class="htmlCss-sub-menu sub-menu p-0">
                  {/* <li class="more">
              <span><a href="#">Other</a>
                <i class='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
              <ul class="more-sub-menu sub-menu">
                <li><a href="#">Neumorphism</a></li>
                <li><a href="#">Pre-loader</a></li>
                <li><a href="#">Glassmorphism</a></li>
              </ul>
            </li> */}
                  <li class="more">
                    <span>
                      <a href="#">Clinical</a>
                      <i class="bx bxs-chevron-right arrow more-arrow"></i>
                    </span>
                    <ul class=" w_280px more-sub-menu sub-menu">
                      {/* <li><a href="#">Neumorphism</a></li>
                <li><a href="#">Pre-loader</a></li>
                <li><a href="#">Glassmorphism</a></li> */}

                      <li>
                        <a href="#">Anesthesia</a>
                      </li>
                      <li>
                        <a href="#">Anatomy</a>
                      </li>
                      <li>
                        <a href="#">Cardiology</a>
                      </li>
                      <li>
                        <a href="#">Dermatology</a>
                      </li>
                      <li>
                        <a href="#">Dentistry</a>
                      </li>
                      <li>
                        <a href="#">Emergency Medicine</a>
                      </li>
                      <li>
                        <a href="#">Endocrinology</a>
                      </li>
                      <li>
                        <a href="#">ENT (Ear, Nose, and Throat)</a>
                      </li>
                      <li>
                        <a href="#">Forensic Medicine & Toxicology</a>
                      </li>
                      <li>
                        <a href="#">Gastroenterology</a>
                      </li>
                      <li>
                        <a href="#">Geriatric Medicine</a>
                      </li>
                      <li>
                        <a href="#">Gynecology</a>
                      </li>
                      <li>
                        <a href="#">Hematology</a>
                      </li>
                      <li>
                        <a href="#">Medical Surgical</a>
                      </li>
                      <li>
                        <a href="#">Medicine</a>
                      </li>
                      <li>
                        <a href="#">Nephrology</a>
                      </li>
                      <li>
                        <a href="#">Neurology</a>
                      </li>
                      <li>
                        <a href="#">Surgery</a>
                      </li>
                      <li>
                        <a href="#">Ophthalmology</a>
                      </li>
                      <li>
                        <a href="#">Out Patient Department (OPD)</a>
                      </li>
                      <li>
                        <a href="#">Orthopedics</a>
                      </li>
                      <li>
                        <a href="#">Pediatrics</a>
                      </li>
                      <li>
                        <a href="#">Physical Medicine & Rehabilitation</a>
                      </li>
                      <li>
                        <a href="#">Physiology</a>
                      </li>
                      <li>
                        <a href="#">Plastic Surgery</a>
                      </li>
                      <li>
                        <a href="#">Pulmonary Medicine and Sleep Disorders</a>
                      </li>
                      <li>
                        <a href="#">Psychiatry</a>
                      </li>
                      <li>
                        <a href="#">Rheumatology</a>
                      </li>
                      <li>
                        <a href="#">Urology</a>
                      </li>
                    </ul>
                  </li>
                  <li class="more">
                    <span>
                      <a href="#">Diagnostic</a>
                      <i class="bx bxs-chevron-right arrow more-arrow"></i>
                    </span>
                    <ul class=" w_280px more-sub-menu sub-menu">
                      <li>
                        <a href="#lab_technician">Lab Technician</a>
                      </li>
                      <li>
                        <a href="#blood_bank">Blood Bank</a>
                      </li>
                      <li>
                        <a href="#biochemistry">Biochemistry</a>
                      </li>
                      <li>
                        <a href="#microbiology">Microbiology</a>
                      </li>
                      <li>
                        <a href="#pathology">Pathology</a>
                      </li>
                      <li>
                        <a href="#pharmacology">Pharmacology</a>
                      </li>
                      <li>
                        <a href="#radio_diagnosis">Radio Diagnosis</a>
                      </li>
                      <li>
                        <a href="#radiographers">Radiographers</a>
                      </li>
                    </ul>
                  </li>

                  <li class="more">
                    <span>
                      <a href="#">Techniques</a>
                      <i class="bx bxs-chevron-right arrow more-arrow"></i>
                    </span>
                    <ul class=" w_280px more-sub-menu sub-menu">
                      <li>
                        <a href="#"> OT Technicians</a>
                      </li>
                      <li>
                        <a href="#">Technicians CSSD </a>
                      </li>
                      <li>
                        <a href="#">Nursing </a>
                      </li>
                    </ul>
                  </li>

                  <li class="more">
                    <span>
                      <a href="#">Other</a>
                      <i class="bx bxs-chevron-right arrow more-arrow"></i>
                    </span>
                    <ul class=" w_280px more-sub-menu sub-menu">
                      <li>
                        <a href="#">Hospital Administration</a>
                      </li>
                      <li>
                        <a href="#">Laundry</a>
                      </li>
                      <li>
                        <a href="#">Pharmacist</a>
                      </li>
                      <li>
                        <a href="#">Dietician</a>
                      </li>
                      <li>
                        <a href="#">Ward assistance </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {isLogin && (
                <li class="nav-item active ">
                  <Link class="nav-link text-white" to="/Dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              <li class="nav-item">
                <Link class="nav-link text-white" to="/Abouts">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/JobSearch">
                  Jobs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/JobSearch">
                  Internships
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/JobSearch">
                  Training / Course
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/EmployersProfile" class="nav-link text-white">
                  Profile
                </Link>
              </li> */}

              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
               Indestry
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/JobSearch">
                      Clinical
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/JobSearch">
                      Hospital
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li class="nav-item">
                <Link to="/TermCondation" class="nav-link text-white">
                  TermCondation
                </Link>
              </li> */}
              {!isLogin && (
                <li class="nav-item">
                <button 
                type="button" 
                class="btn btn-primary"
                style={{backgroundColor:"#C85640"}}
                >
                  <Link to="/Login" class="text-white">
                    SignIn
                  </Link>
                  </button>
                </li>
              )}
              {/* {!isLogin && (
                <li class="nav-item">
                <button type="button" class="btn btn-outline-primary">
                  <Link to="/Login" class="nav-link text-white">
                    SignIn
                  </Link>
                  </button>
                </li>
              )} */}

              {/* <li class="nav-item">
          <Link to="/" class="nav-link text-white" >Logout</Link>
        </li> */}
            </ul>
          </div>
          {/* </nav> */}
          {/* <form class="d-flex "> */}
          {/* <div className=''> */}
          {isLogin && (
            <>
              <div className="d-flex" style={{width:"40%"}}>
                <FontAwesomeIcon className="ms-4 mt-1 fs_13" icon={faUser} />
                <p className="text-white ms-2 fs_13">{userNameData}</p>
                {/* {capitalizeFirstLetter(UserDetails)} */}
              </div>
              <button
                className="ms-2 btn btn-primary  fs_12 "
                onClick={() => Logout()}
                style={{width:"20%"}}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span className="fw-none ms-1 mt-3">Logout</span>
              </button>
            </>
          )}
        </div>

        {/* <input class="form-control me-2 h_32" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-info h_32" type="submit">Search</button> */}
        {/* </form> */}

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbaar;
