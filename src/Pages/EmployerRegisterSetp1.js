import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Steps,
  Space,
} from "antd";
import { useNavigate } from "react-router-dom";
import ProgressStep from "../Component/ProgressStep";
import { ApiEndPoint } from "../Constant/constant";
import { InputOTP } from "antd-input-otp";
import { ToastContainer, toast } from "react-toastify";
import Valoidation from "../Component/Validation";
import { State, Country, City } from "country-state-city";
import moment from "moment";
import Navbar2 from "./Navbar2";
const Step = Steps.Step;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const EmployerRegisterSetp1 = () => {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const [verifyedMobile, setVerifyedMobile] = useState(false);
  console.log("verifyed otp ", verifyedMobile);
  const [fileList, setFileList] = useState({});
  const countries = Country.getAllCountries();
  const [state, setstate] = useState([]);
  const [Citys, setCitys] = useState([]);

  console.log("City----", Citys);
  //  job details add

  const [jobDetails, setjobDetails] = useState({
    name: "",
    industryType: "",
    type: "employer",
    contactPerson: "",
    responsibilities: "",
    email: "",
    mobile: "",
    organization: "",
    benefits: "",
    location: "",
    country: "",
    state: "",
    city: " ",
    // profileimg: "",
  });
  console.log("jobDetails", jobDetails);

  // const [FormData, setFormData] = useState({
  //     name:"",
  //     industryType:"",
  //     type:"",
  //     contactPerson:"",
  //     responsibilities:"",
  //     email:"",
  //     mobile:"",
  //     organization:"",
  //     benefits:"",
  //     location:"",
  //     country:"",
  //     city:" "

  // });
  const [EmployerRegisterSetp1, setEmployerRegisterSetp1] = useState(false);
  const [industryInsert, setindustryInsert] = useState([]);
  const [image, setImage] = useState("");
  console.log("image=-----", image);

  const IndustryList = [{}];

  // send opt gentreated  method
  const SendOtp = async () => {
    form.resetFields();
    try {
      const mobileno = {
        phone: jobDetails.mobile,
      };
      console.log("mobileno.phone------", mobileno.phone, jobDetails.mobile);
      if (mobileno.phone) {
        const response = await axios
          .post(ApiEndPoint.generateOTP, mobileno)
          .then((res) => {
            toast.success("Successfully sent OTP");
            console.log("Successful OTP send", res.data);

            const modal = document.getElementById("exampleModal");
            if (modal) {
              modal.classList.add("show"); // Ensure the 'show' class is added to display the modal
              modal.style.display = "block";
            } else {
              console.error("Modal not found");
            }
          })
          .catch((error) => {
            console.log("invalid mobile no", error.response.data);
            toast.error(error.response.data.error);
          });

        // Assuming toast is available globally or imported from a library
      } else {
        toast.error("Mobile number not provided");
        console.log("Mobile number not provided");
      }
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  // CLOSE POPUP  MODEL OTP
  const hideModal = () => {
    console.log("click---");
    form.resetFields();
    const modal = document.getElementById("exampleModal");
    if (modal) {
      modal.classList.remove("show"); // Remove the 'show' class to hide the modal
      modal.style.display = "none"; // Set display property to 'none' to hide the modal
    } else {
      console.error("Modal not found");
    }
  };

  useEffect(() => {
    console.log("FormData------", FormData);
  }, [FormData]);

  //  industryInsert get app

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    await axios
      .get(ApiEndPoint.getIndustryList)
      .then((res) => {
        setindustryInsert(res.data);
        console.log("industryInsert", res.data);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  //  opt varifaction api
  const handleFinish = async (values) => {
    const { otp } = values;
    console.log("otp------", values);
    if (!otp || otp.includes(undefined) || otp.includes(""))
      return form.setFields([
        {
          name: "otp",
          errors: ["OTP is invalid."],
        },
      ]);

    console.log(`OTP: ${otp.join("")}`);
    const gennratedOtp = otp;
    console.log("gennratedOtp", gennratedOtp);
    if (gennratedOtp.length != 4) {
      toast.error("Invalid OTP");

      return;
    }

    const otpData = {
      phone: jobDetails.mobile,
      otp: gennratedOtp.join(""),
    };
    const val = Valoidation(otpData);
    if (!val) {
      return;
    }

    await axios
      .post(ApiEndPoint.verifyOTP, otpData)
      .then((res) => {
        if (res) {
          setVerifyedMobile(true);
          hideModal();
          form.resetFields();
          console.log("Successfully verify OTP");
          toast.success("Successfully verify OTP");
        }
      })
      .catch((error) => {
        toast.error("Does not verify OTP");

        console.log("Does not verify OTP", error);
      });
  };

    //  profile image uplode
    const UploadImage = async (UniqName) => {
      const formData = new window.FormData();
      formData.append("fileName", UniqName);
      formData.append("file", fileList);
      console.log("fileList--------------", fileList);
      // try {
      await axios
        .post(ApiEndPoint.upload, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("upload profile image", res);
          return true;
        })
        .catch((error) => {
          console.log("not upload profile image");
          return false;
        });
    };

  const navigateNextPage = async () => {
    const val = Valoidation(jobDetails);
    console.log("val------", val);
    if (!val) {
      return;
    }

    if(!verifyedMobile){
      toast.error(`Please verify your phone no`);
      return;
    }

    if (!Boolean(fileList?.name)) {
      toast.error(`Please insert Profile Image `);
      return;
    }
    let currentDate = moment().format("DDMMYYYYHHmmss");
    let fileParts = fileList.name.split(".");
    const uniqNo = parseInt(Math.random() * 100);
    let extname = fileParts.length > 0 ? fileParts[0] : "";
    let ext = fileParts.length > 0 ? fileParts[fileParts.length - 1] : "";
    let fileNameExt = extname + currentDate + uniqNo;
    const UniqName = fileNameExt + "." + ext;
    console.log(" file UniqName ", UniqName,fileNameExt);

    let rs = await UploadImage(fileNameExt);
    if (rs == false) {
      return;
    }

    let formDataObj = jobDetails;
    formDataObj["profileimg"] = UniqName;
    console.log("FormData updated data", formDataObj);

    axios
      .post(ApiEndPoint.EmployerSignup, formDataObj)
      .then(async (response) => {
        console.log("POST Request Response:", response.data);
        await sessionStorage.setItem("userRole", response?.data?.type);
        await sessionStorage.setItem("userName", response?.data?.name);
        await sessionStorage.setItem("loginToken", response?.data?.token);
        toast.success("Step 1 completed");
        navigate("/EmployerRegisterSetp2");
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        console.error(
          "Error making POST request:",
          error.response.data
        );
      });
  
  };

  return (
    <div className=" skill-bg">
    <Navbar2 />
      <ToastContainer />
      <div className="row m-0 p-0 d-flex justify-content-center ">
        <div className="col-md-8 col-12">
          <div className="card card-shadow my-3 px-3    my-5">
            <div className="row my-2">
              <div className="col-md-12 col-12">
                <ProgressStep step={0} />
                <h5 className="">Profile Registration</h5>
                <div className="card my-2  p-2 ">
                  <div className="row">
                    <div className="col-md-4 col-12">
                      <Form
                        // form={form}
                        layout="vertical"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item className="mb-1" label="Industry - Type">
                          <Select
                            onChange={(val) =>
                              setjobDetails({
                                ...jobDetails,
                                industryType: val,
                              })
                            }
                          >
                            {industryInsert.map((i) => (
                              <Select.Option key={i.name} value={i.name}>
                                {i.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item className="mb-1" label="Name of the Organization  ">
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                name: e.target.value,
                              });
                            }}
                            value={jobDetails.name}
                          />
                        </Form.Item>
                        {/* <Form.Item className="mb-1" label="Phone No  ">
                          <Input />
                        </Form.Item> */}
                        <Form.Item className="mb-1" label="Mobile No  ">
                          <Space.Compact style={{ width: "100%" }}>
                            <Input
                              maxLength={10}
                              type="mobile"
                              onChange={(val) =>
                                setjobDetails({
                                  ...jobDetails,
                                  mobile: val.target.value,
                                })
                              }
                            />
                            {verifyedMobile != true ? (
                              <Button type="primary" onClick={SendOtp}>
                                Send OTP
                              </Button>
                            ) : (
                              <Button type="primary" style={{backgroundColor:"green"}}>Verified OTP</Button>
                            )}
                          </Space.Compact>
                        </Form.Item>

                        {/* verifyedMobile */}

                        <Form.Item className="mb-1" label="state">
                          <Select
                            onChange={(val) => {
                              let str = val.split(" ");
                              console.log("str------", str);
                              let cityss = City.getCitiesOfState(
                                str[1],
                                str[0]
                              );
                              setCitys(cityss);
                              setjobDetails({ ...jobDetails, state: val });
                              // setstate(State.getStatesOfCountry(val))
                              // setjobDetails({...jobDetails,country:val })}}
                            }}
                            value={jobDetails.state}
                          >
                            {state &&
                              state.map((i, key) => (
                                <Select.Option
                                  key={i.isoCode}
                                  value={`${i.isoCode} ${i.countryCode}`}
                                >
                                  {i.name}
                                </Select.Option>
                              ))}{" "}
                          </Select>
                        </Form.Item>

                        <Form.Item className="mb-1" label="organization  ">
                          <Select
                            onChange={(val) => {
                              setjobDetails({
                                ...jobDetails,
                                organization: val,
                              });
                            }}
                            value={jobDetails.organization}
                          >
                            <Select.Option value="Allopathy Hospital">
                            Allopathy Hospital  
                            </Select.Option>
                            <Select.Option value="Allopathy Clinic">
                            Allopathy Clinic
                            </Select.Option>
                            <Select.Option value="Ayurveda Hospital">
                              Ayurveda Hospital
                            </Select.Option>
                            <Select.Option value="Ayurveda Clinic">
                              Ayurveda Clinic
                            </Select.Option>
                            <Select.Option value="Homeopathy Hospital">
                              Homeopathy Hospital
                            </Select.Option>
                            <Select.Option value="Homeopathy Clinic">
                              Homeopathy Clinic
                            </Select.Option>
                            <Select.Option value="Nursing Home">
                              Nursing Home
                            </Select.Option>
                            <Select.Option value="Diagnostic Centers ">
                              Diagnostic Centers 
                            </Select.Option>
                            <Select.Option value="Imaging Centers">
                              Imaging Centers
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </Form>
                    </div>
                    <div className="col-md-4 col-12">
                      <Form
                        // form={form}
                        layout="vertical"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item
                          className="mb-1"
                          label="Name of the contact person/HR  "
                        >
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                contactPerson: e.target.value,
                              });
                            }}
                            value={jobDetails.contactPerson}
                          />
                        </Form.Item>
                        <Form.Item className="mb-1" label="Email  ">
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                email: e.target.value,
                              });
                            }}
                            value={jobDetails.email}
                          />
                        </Form.Item>

                        <Form.Item className="mb-1" label="Country">
                          <Select
                            onChange={(val) => {
                              setstate(State.getStatesOfCountry(val));
                              setjobDetails({ ...jobDetails, country: val });
                            }}
                            value={jobDetails.country}
                          >
                            {countries.map((i) => (
                              <Select.Option key={i.isoCode} value={i.isoCode}>
                                {i.name}
                              </Select.Option>
                            ))}{" "}
                          </Select>
                        </Form.Item>

                        <Form.Item className="mb-1" label="City ">
                          <Select
                            onChange={(val) => {
                              setjobDetails({ ...jobDetails, city: val });
                            }}
                            value={jobDetails.city}
                          >
                            {Citys &&
                              Citys.map((i) => (
                                <Select.Option value={i.name}>
                                  {i.name}
                                </Select.Option>
                              ))}
                          </Select>
                        </Form.Item>

                        <Form.Item className="mb-1" label="Location  ">
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                location: e.target.value,
                              });
                            }}
                            value={jobDetails.location}
                          />
                        </Form.Item>
                        <Form.Item
                          className="mb-1"
                          label="Web link of the organization  "
                        >
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                webLink: e.target.value,
                              });
                            }}
                            value={jobDetails.webLink}
                          />
                        </Form.Item>
                      </Form>
                    </div>
                    <div className="col-md-4 col-12">
                      <Form
                        // form={form}
                        layout="vertical"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item
                          className="mb-0 p-0 "
                          label="Profile"
                          valuePropName="fileList"
                          // getValueFromEvent={normFile}
                        >
                          <div class="row">
                            <div class="small-12 medium-2 large-2 columns">
                              <div class="circle">
                                <img
                                  class="profile-pic"
                                  src={
                                    image
                                      ? image
                                      : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                                  }
                                />
                              </div>
                              <div class="p-image">
                                {/* <i class="fa fa-camera upload-button"></i> */}
                                <input
                                  class="border-0 p-2 file-upload"
                                  onChange={(e) => {
                                    let reader = new FileReader();
                                    let file = e.target.files[0];

                                    reader.onloadend = () => {
                                      setImage(reader.result);
                                    };

                                    if (file) {
                                      reader.readAsDataURL(file);
                                      console.log("file-----", file);
                                      setFileList(file);
                                    }
                                  }}
                                  // style={{ display: "none" }}
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </Form.Item>
                        <Form.Item className="mb-1" label="Responsibilities">
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                responsibilities: e.target.value,
                              });
                            }}
                            value={jobDetails.responsibilities}
                          />
                        </Form.Item>
                        <Form.Item className="mb-1" label="Benefits for employ">
                          <Input
                            onChange={(e) => {
                              setjobDetails({
                                ...jobDetails,
                                benefits: e.target.value,
                              });
                            }}
                            value={jobDetails.benefits}
                          />
                        </Form.Item>{" "}
                      </Form>
                    </div>

                    <div className="col-md-12 col-12">
                      <Button
                        onClick={navigateNextPage}
                        className="float-end bg-primary text-white"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {" "}
                Verify OTP
              </h5>
              <button
                type="button"
                class="btn-close"
                onClick={() => hideModal()}
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Form form={form} onFinish={handleFinish}>
                <Form.Item
                  name="otp"
                  id="otpInput"
                  className="center-error-message"
                  rules={[{ validator: async () => Promise.resolve() }]}
                >
                  <InputOTP autoFocus inputType="numeric" length={4} />
                </Form.Item>

                <Form.Item noStyle>
                  <Button
                    className="mt-4"
                    block
                    htmlType="submit"
                    type="primary"
                  >
                    Submit OTP
                  </Button>
                </Form.Item>
              </Form>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary fs_12"
                onClick={() => hideModal()}
              >
                Close
              </button>
              <button type="button"  class="btn btn-primary fs_12">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployerRegisterSetp1;
