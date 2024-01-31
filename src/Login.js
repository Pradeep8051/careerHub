import React, { useState } from "react";
import loginImg from "./images/signup-image.jpg";
import SignINimg from "./images/signin-image.jpg";
import { Button, Checkbox, Form, Input, Modal, Select } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import Validation from "./Component/Validation";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { ApiEndPoint, BaseURL } from "./Constant/constant";
import sessionstorage from "sessionstorage";

const Login = () => {
  // data save on state
  const [user, setUser] = useState({
    phone: "",
    role: "",
    password: "",
  });

  // login user submit
  const LoginUser = async () => {
    console.log("user login data----", user);
    let val = await Validation(user);
    if (!val) {
      return;
    }

    let userdata = {
      phone: user.phone,
      role: user.role,
      password: user.password,
    };

    const respoonse = await axios
      .post(ApiEndPoint.signin, userdata)
      .then(async (res) => {
        console.log("res---", res.data.token);
        // console.log("res.data.user.name", res.data.user.name);
        
        toast.success("Succesful login");
        await sessionStorage.setItem("userRole", userdata.role);
        await sessionStorage.setItem("userName", res.data.user.name);
        await sessionStorage.setItem("loginToken", res.data.token);

        navigate("/Dashboard");
      })
      .catch((err) => {
        toast.error("this user id is not match");

        console.log(err);
      });

    // console.log("login details",user )
  };

  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const popubmodel = () => {
    return (
      <>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal with customized button props
        </Button> */}
        <Modal
          title="Choose the Registration"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{
            disabled: true,
            hidden: true,
          }}
          cancelButtonProps={{
            disabled: true,
            hidden: true,
          }}
        >
          <div className="row">
            <div className="col-md-6 col-12">
              <a onClick={() => navigate("/EmployeeRegister1")}>
                <figure class="snip1176">
                  <img
                    className="popup-Img-S"
                    src="https://assets.entrepreneur.com/content/3x2/2000/20160718032444-shutterstock-370385141.jpeg"
                    alt="sample80"
                  />
                  <figcaption>
                    <div class="icon">
                      <span>
                        <i class="ion-ios-star-outline"></i>
                      </span>
                    </div>
                    <h5 className="m-3">Employee</h5>
                    <div class="caption">
                      <p>Regeister with Employee </p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-md-6 col-12">
              <a onClick={() => navigate("/EmployerRegisterSetp1")}>
                <figure class="snip1176">
                  <img
                    className="popup-Img-S"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuqqiFRpTdOR7ZAQ6nPxKvGPUTX4TpE-SZQ&usqp=CAU"
                    alt="sample80"
                  />
                  <figcaption>
                    <div class="icon">
                      <span>
                        <i class="ion-ios-star-outline"></i>
                      </span>
                    </div>
                    <h5 className="m-3">Employer</h5>
                    <div class="caption">
                      <p>Regeister with Employer</p>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </Modal>
      </>
    );
  };

  return (
    <div className="vh-">
      <ToastContainer />
      <div class="main skill-bg vh-10">
        {/* <!-- Sing in  Form --> */}
        <section class="sign-in">
          <div class="containers mt-5">
            {popubmodel()}
            <div class="signin-content">
              <div class="signin-image">
                <figure>
                  <img src={SignINimg} alt="sing up image" />
                </figure>
                {/* <Button type="primary" onClick={showModal}>
          Open Modal with customized button props
        </Button> */}
                <Button onClick={showModal} class="signup-image-link">
                  Create an account
                </Button>
              </div>

              <div class="signin-form">
                <h2 class="form-title">Sign In</h2>
                <Form.Item className="mb-1" label="Phone no">
                  <Input
                    className=""
                    name="Phone no"
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <label>Role :</label>
                <Form.Item className="mb-1" placeholder="default size">
                  {/* <Input className='' placeholder="default size" prefix={<UserOutlined />} /> */}
                  <Select
                    value={user?.role}
                    onChange={(val) => setUser({ ...user, role: val })}
                    placeholder="default size"
                  >
                    {/*<Select.Option value="demo">
                                 Role :
                                </Select.Option>*/}
                    <Select.Option value="employee">Employee</Select.Option>
                    <Select.Option value="employer">Employer</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item className="mb-1" label="Password">
                  <Input.Password
                    className="mb-3"
                    placeholder="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </Form.Item>
                <Checkbox className="mb-3">Remember me</Checkbox>
                <div className="col-md-12 col-12 mt-2">
                  <Button
                    onClick={() => LoginUser()}
                    // onClick={() => navigate("/Dashboard")}
                    className="float-end bg-primary text-white"
                  >
                    Login
                  </Button>
                </div>

                <div class="social-login">
                  <span class="social-label">Or login with</span>
                  <ul class="socials">
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
