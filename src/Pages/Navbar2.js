import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";

const Navbar2 = () => {
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
        <div class="container-fluid" >
          <div className="w-100">
            <a className="navbar-brand text-white " href="/">
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
          </div>
          <div class="collapse navbar navbar-collapse" id="navbarNav">
            <ul class="navbar-nav links">
              <li class="nav-item">
                <Link class="nav-link  text-white" to="/">
                  Home
                </Link>
              </li>

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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
