import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import {
  message,
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
import { Link, useNavigate } from "react-router-dom";
import ProgressStep from "../Component/ProgressStep";
import { ApiEndPoint } from "../Constant/constant";
import axios from "axios";
import Valoidation from "../Component/Validation";
import { ToastContainer, toast } from "react-toastify";
// import { Button, Form } from 'antd';
import { InputOTP } from "antd-input-otp";
import moment from "moment";
import Navbar2 from "./Navbar2";
//  profile pic uploade 1
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

//  profile pic uploade 2
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const EmployeeRegister1 = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [verifyedMobile, setVerifyedMobile] = useState(false);
  const [form] = Form.useForm();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(true);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  let navigate = useNavigate();
  const CheckboxGroup = Checkbox.Group;
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [checkedList, setCheckedList] = useState("male");
  const [otpVerify, setOtpVerify] = useState("");
  const [fileList, setFileList] = useState({});
  const [FormData, setFormData] = useState({
    address: "",
    age: "",
    city: "",
    district: "",
    email: "",
    fathername: "",
    gender: "",
    location: "",
    mobile: "",
    name: "",
    pincode: "",
    role: "",
    // profileimg:""
  });
  console.log("otpVerify----", otpVerify);
  console.log("fileList----", fileList);

  const submit = async () => {
    // navigate("/EmployerReg2");
    const validations = Valoidation(FormData);
    console.log("validations-----", validations);
    if (!validations) {
      return;
    }

    if (!verifyedMobile) {
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
    console.log(" file UniqName ", UniqName);

    let rs = await UploadImage(fileNameExt);
    if (rs == false) {
      return;
    }

    let formDataObj = FormData;
    formDataObj["profileimg"] = UniqName;
    console.log("FormData updated data", formDataObj);
    axios
      .post(ApiEndPoint.signup, formDataObj)
      .then(async (response) => {
        console.log("POST Request Response:", response?.data);
        await sessionStorage.setItem("userRole", response?.data?.type);
        await sessionStorage.setItem("userName", response?.data?.name);
        await sessionStorage.setItem("loginToken", response?.data?.token);
        toast.success("step 1 complete");
        navigate("/EmployeeRegister2");
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        console.error(
          "Error making POST request:",
          error?.response?.data?.message
        );
      });
  };

  // send opt gentreated  method
  const SendOtp = async () => {
    form.resetFields();
    try {
      const mobileno = {
        phone: FormData.mobile,
      };

      if (mobileno.phone) {
        const response = await axios
          .post(ApiEndPoint.generateOTP, mobileno)
          .then((res) => {
            toast.success("Successfully sent OTP");
            console.log("Successful OTP send", res?.data);

            const modal = document.getElementById("exampleModal");
            if (modal) {
              modal.classList.add("show"); // Ensure the 'show' class is added to display the modal
              modal.style.display = "block";
            } else {
              console.error("Modal not found");
            }
          })
          .catch((error) => {
            console.log("invalid mobile no", error?.response?.data);
            toast.error(error?.response?.data?.error);
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
      setOtpVerify("");
    } else {
      console.error("Modal not found");
    }
    // const modalEle = modalRef.current;
    // const bsModal = bootstrap.Modal.getInstance(modalEle);
    // bsModal.hide();
  };

  useEffect(() => {
    console.log("FormData------", FormData);
  }, [FormData]);

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
      phone: FormData.mobile,
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

  const [image, setImage] = useState("");
  console.log("image=-----", image);

  return (
    <>
    <Navbar2 />
    <div className=" skill-bg w-100 ">
      <ToastContainer />

      <div className="row m-0 p-0 d-flex justify-content-center ">
        <div className="col-md-8 col-12">
          <div className="card card-shadow px-3    my-2">
            <div className="row ">
              <div className="col-md-12 col-12">
                <ToastContainer />
                <ProgressStep step={0} />
                <h5 className="">Profile Registration</h5>
                <div className="card my-2  p-3 ">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <Form
                        layout="vertical"
                        // onFinish={onFinish}f
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item className="mb-1" label="I am Mr/Ms   ">
                          <Input
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                name: val.target.value,
                              })
                            }
                          />
                        </Form.Item>
                        <Form.Item
                          className="mb-1"
                          label="Father’s/Guardian’s Name   "
                        >
                          <Input
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                fathername: val.target.value,
                              })
                            }
                          />
                        </Form.Item>
                        <Form.Item className="mb-2" label="Age   ">
                          <Input
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                age: val.target.value,
                              })
                            }
                          />
                        </Form.Item>
                        <Form.Item className="mb-0" label="Gender   ">
                          <Radio.Group
                            className="mb-0"
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                gender: val.target.value,
                              })
                            }
                            value={FormData?.gender}
                          >
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                            <Radio value="other">Other</Radio>
                          </Radio.Group>
                        </Form.Item>
                        <Form.Item className="mb-1" label="I am ">
                          <Select
                            onChange={(val) => {
                              setFormData({ ...FormData, role: val });
                              console.log("test----", val);
                            }}
                            value={FormData?.role}
                          >
                            <Select.Option value="School Student">School Student</Select.Option>
                            <Select.Option value="College Student">College Student</Select.Option>
                            <Select.Option value="Fresher">Fresher</Select.Option>
                            <Select.Option value="Working Professional">Working Professional</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item className="mb-1" label="Email  ">
                          <Input
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                email: val.target.value,
                              })
                            }
                          />
                        </Form.Item>
                      </Form>
                    </div>
                    <div className="col-md-6 col-12">
                      {/* <div class="row">
   <div class="small-12 medium-2 large-2 columns">
     <div class="circle">
       <img class="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"/>

     </div>
     <div class="p-image">
       <i class="fa fa-camera upload-button"></i>
        <input  class="file-upload" type="file" accept="image/*"/>
     </div>
  </div>
</div> */}

                      <Form
                        // form={form}
                        layout="vertical"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item
                          className="mb-0 p-0 "
                          label="Profile Img"
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
                          {/* <Upload
                            className="float-end mb-0 p-0 h_100"
                            action={`${ApiEndPoint.upload}`}
                            // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture-card"
                            // onChange={(fileList)=>{console.log("setFileList-----",fileList);setFileList(fileList.file.originFileObj)}}
                            // onChange={({ fileList }) => setFileList(fileList.slice(-1))}
                            onChange={handleChange1}
                            // onRemove={}
                          >
                            {Object.keys(fileList).length === 0 ? (
                              <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                              </div>
                            ) : null}
                          </Upload> */}

                          {/* <button  onClick={UploadImage}>submit</button> */}
                        </Form.Item>

                        <div className="row">
                          <Form.Item
                            className="mb-1 col-12 col-md-6"
                            label="Address   "
                          >
                            <Input
                              onChange={(val) =>
                                setFormData({
                                  ...FormData,
                                  address: val.target.value,
                                })
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            className="mb-1 col-12 col-md-6 "
                            label="Area/location    "
                          >
                            <Input
                              onChange={(val) =>
                                setFormData({
                                  ...FormData,
                                  location: val.target.value,
                                })
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            className="mb-1 col-12 col-md-6"
                            label="City   "
                          >
                            <Input
                              onChange={(val) =>
                                setFormData({
                                  ...FormData,
                                  city: val.target.value,
                                })
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            className="mb-1 col-12 col-md-6 "
                            label="District  "
                          >
                            <Input
                              onChange={(val) =>
                                setFormData({
                                  ...FormData,
                                  district: val.target.value,
                                })
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            className="mb-1 col-12 col-md-6"
                            label="State    "
                          >
                            <Input
                              onChange={(val) =>
                                setFormData({
                                  ...FormData,
                                  state: val.target.value,
                                })
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            className="mb-1 col-12 col-md-6 "
                            label="Pin Code    "
                          >
                            <Input
                              onChange={(val) =>
                                setFormData({
                                  ...FormData,
                                  pincode: val.target.value,
                                })
                              }
                            />
                          </Form.Item>
                          <Form.Item className="mb-1" label="Mobile No  ">
                            <Space.Compact style={{ width: "100%" }}>
                              <Input
                                maxLength={10}
                                type="mobile"
                                onChange={(val) =>
                                  setFormData({
                                    ...FormData,
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
                        </div>
                      </Form>
                    </div>

                    <Checkbox className="mb-3 my-1">
                      I agreed with the{" "}
                      <Link to="../TermCondation"> Terms & Conditions</Link> of
                      www.careehub.com (a unit of M/s Monchi Enterprise).
                    </Checkbox>

                    <div className="col-md-12 col-12 ">
                      <Button
                        onClick={submit}
                        className="float-end bg-primary text-white "
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
    </>
  );
};
export default EmployeeRegister1;
