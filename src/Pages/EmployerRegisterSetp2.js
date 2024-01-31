import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
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
} from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProgressStep from "../Component/ProgressStep";
import axios from "axios";
import { ApiEndPoint, BaseURLImage } from "../Constant/constant";
import { ToastContainer, toast } from "react-toastify";
import Valoidation from "../Component/Validation";
import moment from "moment";
import dayjs from "dayjs";
import Navbar2 from "./Navbar2";
// import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const EmployerRegisterSetp2 = () => {
  const [editUser, setEditUser] = useState(false);
  const location = useLocation();
  const [image, setImage] = useState("");
  const [fileList, setFileList] = useState({});
  console.log("image=-----", image);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const jobId = searchParams.get("jobId");
    if (jobId != "" && jobId != null) {
      setEditUser(true);
    }

    UserEditDetails(jobId);

    console.log("keyssss----", jobId);
  }, [location]);

  let navigate = useNavigate();
  const GetToken = sessionStorage.getItem("loginToken");
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [FormData, setFormData] = useState({
    nameDepartments: "",
    openingType: "",
    opening: null,
    feeType: "",
    date: dayjs().format("DD/MM/YYYY"),
    certification: "",
    stipend: null,
    description: "",
    jobType: "",
    experience: "",
    language: "",
    // image:""
  });

  console.log("FormData----------", FormData);
  const Clinical_menu = [
    "Anesthesia",
    "Anatomy",
    "Cardiology",
    "Dermatology",
    "Dentistry",
    "Emergency Medicine",
    "Endocrinology",
    "ENT (Ear, Nose, and Throat)",
    "Forensic Medicine & Toxicology",
    "Gastroenterology",
    "Geriatric Medicine",
    "Gynecology",
    "Hematology",
    "Medical Surgical",
    "Medicine",
    "Nephrology",
    "Neurology",
    "Surgery",
    "Ophthalmology",
    "Out Patient Department (OPD)",
    "Orthopedics",
    "Pediatrics",
    "Physical Medicine & Rehabilitation",
    "Physiology",
    "Plastic Surgery",
    "Pulmonary Medicine and Sleep Disorders",
    "Psychiatry",
    "Rheumatology",
    "Urology"
  ];

  const Diagnostic_menu = [
   " Lab Technician",
"Blood Bank",
"Biochemistry",
"Microbiology",
"Pathology",
"Pharmacology",
"Radio Diagnosis",
"Radiographers"  ];

const Technique_menu =[
  "OT Technicians",
"Technicians CSSD" ,
"Nursing "

];
const Other_menu =[
" Hospital Administration",
" Laundry",
" Pharmacist",
" Dietician",
" Ward assistance "

];
  const treeData = [
    {
      value: "Clinical ",
      title: "Clinical ",
      // children: [
      //   {
      //     value: "leaf1",
      //     title: "my leaf",
      //   },
      //   {
      //     value: "leaf2",
      //     title: "your leaf",
      //   },
      // ],
      children: Clinical_menu.map((specialty) => ({
        value: specialty.toLowerCase().replace(/\s/g, '_'),
        title: specialty,
      })),
    },
    {
      value: "Diagnostic",
      title: "Diagnostic",
      children: Diagnostic_menu.map((item)=>({
        value: item.toLowerCase().replace(/\s/g, '_'),
        title: item,

      }))
    },
    {
      value: "Technique",
      title: "Technique",
      children: Technique_menu.map((item)=>({
        value: item.toLowerCase().replace(/\s/g, '_'),
        title: item,

      }))
    },
    {
      value: "Other",
      title: "Other",
      children: Other_menu.map((item)=>({
        value: item.toLowerCase().replace(/\s/g, '_'),
        title: item,

      }))
    },
  ];
  const treeData2 = [
    {
      value: "Jobs",
      title: "Jobs",
      // children: [
      //   {
      //     value: "leaf1",
      //     title: "my leaf",
      //   },
      //   {
      //     value: "leaf2",
      //     title: "your leaf",
      //   },
      // ],
    },
    {
      value: "Shadow Internship ",
      title: "Shadow Internship ",
      // children: [
      //   {
      //     value: "leaf1",
      //     title: "my leaf",
      //   },
      //   {
      //     value: "leaf2",
      //     title: "your leaf",
      //   },
      // ],
    },
    {
      value: "Practice Internship",
      title: "Practice Internship",
      // children: [
      //   {
      //     value: "leaf1",
      //     title: "my leaf",
      //   },
      //   {
      //     value: "leaf2",
      //     title: "your leaf",
      //   },
      // ],
    },
    {
      value: "Training Program / Course",
      title: "Training Program / Course",
      // children: [
      //   {
      //     value: "leaf1",
      //     title: "my leaf",
      //   },
      //   {
      //     value: "leaf2",
      //     title: "your leaf",
      //   },
      // ],
    },
  ];

  //  get data by user edit

  const UserEditDetails = (jobId) => {
    console.log("jobId", jobId);
    let payload = {
      jobID: jobId,
    };
    axios
      .post(ApiEndPoint.getJobDetail, payload, {
        headers: {
          Authorization: GetToken,
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        let resData = response?.data?.savedJob;
        console.log("POST Request Response:", response.data.savedJob,resData?.date);

        // if (resData?.date) {
        //   resData["date"] = await moment(resData?.date, "DD/MM/YYYY").format(
        //     "YYYY-MM-DD"
        //   );
        // }

        // let data = {
        //   nameDepartments: resData.nameDepartments,
        //   openingType: resData.openingType,
        //   opening: resData.opening,
        //   feeType: resData.feeType,
        //   date: resData.date,
        //   certification: resData.certification,
        //   stipend: resData.stipend,
        //   description: resData.description,
        //   jobType: resData.jobType,
        //   experience: resData.experience,
        //   language: resData.language,
        // }
        
        setFormData(resData);
        console.log("POST Request Response: resData", resData.nameDepartments);
        setImage(BaseURLImage + response.data.savedJob.image);

        // toast.success("step 2 complete");
        // navigate("/Dashboard");
      })
      .catch((error) => {
        // toast.error(error?.response?.data?.message);
        console.error(
          "Error making POST request:",
          error
          // error?.response?.data?.message
        );
      });
  };

  const onChgDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log("test-------", date, dateString);
    setFormData({
      ...FormData,
      date: dateString,
    });
  };

  const UpdateUser = async () => {
    const val = Valoidation(FormData);
    if (!val) {
      return;
    }

    let currentDate = moment().format("DDMMYYYYHHmmss");
    let uniqNo = parseInt(Math.random() * 100);
    const updatedDetails = FormData;
    console.log("fileList.name.---2",updatedDetails,FormData?.image, fileList?.name,Boolean(fileList?.name),FormData?.image && Boolean(fileList?.name))
    // if(!Boolean(FormData?.image) && !Boolean(fileList?.name)){
    //   toast.error(`Please insert Profile Image `);
    //   return;
    // }
    console.log("FormData?.image------",FormData?.image)
    if( Boolean(fileList?.name) ){

    let fileParts = fileList.name.split(".");
    let filename = fileParts.length > 0 ? fileParts[0] : "";
    let fileExt = fileParts.length > 0 ? fileParts[fileParts.length - 1] : "";
    let fileNameWithExt = filename + currentDate + uniqNo;
    const UniqName = fileNameWithExt + "." + fileExt;
    console.log("UniqName----", UniqName, fileExt);
    updatedDetails["image"] = UniqName;
    let uploadImage = await UploadImage(fileNameWithExt);
    if (uploadImage == false) {
      return;
    }

    }

    console.log(" file UniqName ", updatedDetails);
  
    let data = {
      jobs: updatedDetails,
    };
    axios
      .post(ApiEndPoint.updateJob, data, {
        headers: {
          Authorization: GetToken,
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        console.log("POST Request Response:", response.data);
        toast.success("update user");
        navigate("/Dashboard");
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        console.error("Error making POST request:", error);
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

  const submit = async () => {
    const val = Valoidation(FormData);
    if (!val) {
      return;
    }

    let currentDate = moment().format("DDMMYYYYHHmmss");
    let formDataObj = FormData;
    console.log("fileList.name.---",FormData?.image,fileList?.name,Boolean(FormData?.image) && Boolean(fileList?.name))
    if(!Boolean(FormData?.image) && !Boolean(fileList?.name)){
      toast.error(`Please insert Profile Image `);
      return;
    }
    // if(FormData?.image && Boolean(fileList?.name)){
    let fileParts = fileList.name.split(".");
    const uniqNo = parseInt(Math.random() * 100);
    let extname = fileParts.length > 0 ? fileParts[0] : "";
    let ext = fileParts.length > 0 ? fileParts[fileParts.length - 1] : "";
    const UniqName = extname + currentDate + uniqNo + "." + ext;
    console.log(" file UniqName ", UniqName);

    let uploadImage = await UploadImage(UniqName);
    if (uploadImage == false) {
      return;
    }
    formDataObj["image"] = UniqName;
  // }


    console.log("FormData updated data", formDataObj);

    let data = {
      jobs: formDataObj,
    };

    axios
      .post(ApiEndPoint.addJobs, data, {
        headers: {
          Authorization: GetToken,
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        console.log("POST Request Response:", response.data);
        toast.success("step 2 complete");
        navigate("/Dashboard");
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        console.error(
          "Error making POST request:",
          error?.response?.data?.message
        );
      });
  };

  // const onChgDate: DatePickerProps["onChange"] = (date, dateString) => {
  //   console.log("test-------", date, dateString);
  //   setFormData({
  //     ...FormData,
  //     date: dateString,
  //   });
  // };

  let dateStr = moment(FormData.date, "DD/MM/YYYY").format("YYYY-MM-DD");
  return (
    <div className="vh-10 skill-bg">
      <Navbar2 />
      <ToastContainer />
      <div className="row m-0 p-0 d-flex justify-content-center ">
        <div className="col-md-9 col-12">
          <div className="card  card-shadow px-3    my-2">
            <div className="row ">
              <div className="col-md-12 col-12">
                <ProgressStep step={1} />
                <h5 className="p-2 mt-2 text-success ">
                  Job Description -<span className="text-dark"> Step-2</span>{" "}
                </h5>
                <div className="card my-2 mt-1  p-3 ">
                  <div className="row">
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
                          label="Select the departments  "
                        >
                          <TreeSelect
                            showSearch
                            style={{
                              width: "100%",
                            }}
                            dropdownStyle={{
                              maxHeight: 400,
                              overflow: "auto",
                            }}
                            placeholder="Please select"
                            allowClear
                            // multiple
                            // treeDefaultExpandAll
                            // onChange={onChange}
                            // value={value}
                            onChange={(val) => {
                              setFormData({
                                ...FormData,
                                nameDepartments: val,
                              });
                            }}
                            value={FormData?.nameDepartments}
                            treeData={treeData}
                          />
                        </Form.Item>
                        {/* <Form.Item
                          className="mb-1"
                          label="Name of the Department   "
                        >
                          <Input value={value} />
                        </Form.Item> */}
                        <Form.Item className="mb-1" label=" Experience  ">
                          <Select
                            onChange={(val) => {
                              setFormData({ ...FormData, experience: val });
                            }}
                            value={FormData?.experience}
                          >
                            <Select.Option value="0-1">
                              0 - 1 year
                            </Select.Option>
                            <Select.Option value="1-2">
                              1 - 2 year
                            </Select.Option>
                            <Select.Option value="3-4">
                              3 - 4 year
                            </Select.Option>
                            <Select.Option value="4-5">
                              4 - 5 year
                            </Select.Option>
                            <Select.Option value="5+">
                              5+ year above
                            </Select.Option>
                          </Select>
                        </Form.Item>
                        {/* <Form.Item className="mb-1" label="Role / Openings ">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="demo">1</Select.Option>
                      <Select.Option value="demo">2</Select.Option>
                    </Select>
                  </Form.Item> */}
                        <Form.Item
                          className="mb-1"
                          label="Number of Seats / Opening   "
                        >
                          <Input
                            value={FormData.opening}
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                opening: val.target.value,
                              })
                            }
                          />
                        </Form.Item>

                        <Form.Item className="" label="Certification Issuing ">
                          <Radio.Group
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                certification: val.target.value,
                              })
                            }
                            value={FormData?.certification}
                          >
                            <Radio value="Yes"> Yes </Radio>
                            <Radio value="No"> No</Radio>
                          </Radio.Group>
                        </Form.Item>
                        <Form.Item className="mb-1" label=" jobType  ">
                          <Select
                            onChange={(val) => {
                              setFormData({ ...FormData, jobType: val });
                            }}
                            value={FormData?.jobType}
                          >
                            <Select.Option value="Full Time">
                              Full Time
                            </Select.Option>
                            <Select.Option value="Part Time">
                              Part Time
                            </Select.Option>
                            {/* <Select.Option value="Only Certification">
                              Only Certification
                            </Select.Option> */}
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
                          label="Role / Openings for "
                        >
                          <TreeSelect
                            showSearch
                            style={{
                              width: "100%",
                            }}
                            dropdownStyle={{
                              maxHeight: 400,
                              overflow: "auto",
                            }}
                            placeholder="Please select"
                            allowClear
                            // multiple
                            // treeDefaultExpandAll
                            // onChange={onChanges}
                            // value={value1}
                            onChange={(val) => {
                              setFormData({
                                ...FormData,
                                openingType: val,
                              });
                            }}
                            value={FormData?.openingType}
                            treeData={treeData2}
                          />
                        </Form.Item>
                        <Form.Item className="mb-1" label=" Fee  ">
                          <Select
                            onChange={(val) => {
                              setFormData({ ...FormData, feeType: val });
                            }}
                            value={FormData?.feeType}
                          >
                            <Select.Option value="Paid">Paid</Select.Option>
                            <Select.Option value="Unpaid">
                              Unpaid
                            </Select.Option>
                            {/* <Select.Option value="Only Certification">
                              Only Certification
                            </Select.Option> */}
                          </Select>
                        </Form.Item>
                        <Form.Item className="mb-1" label="If Paid (Amount)">
                          <Input
                            value={FormData.paidAmt}
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                paidAmt: val.target.value,
                              })
                            }
                          />
                        </Form.Item>
                        <Form.Item className="mb-1" label="Stipend – Rs ">
                          <Input
                            value={FormData.stipend}
                            onChange={(val) =>
                              setFormData({
                                ...FormData,
                                stipend: val.target.value,
                              })
                            }
                          />
                          {/* <Select onChange={(val) => {
                              setFormData({ ...FormData, feeType: val });
                            }}
                            value={FormData?.feeType} >
                            <Select.Option value="demo">Demo</Select.Option>
                            <Select.Option value="demo">1</Select.Option>
                            <Select.Option value="demo">2</Select.Option>
                          </Select> */}
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
                          label=" Job Profile"
                          valuePropName="fileList"
                          getValueFromEvent={normFile}
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

                                      // setFormData({...FormData, image:file.name})
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
                            action="/upload.do"
                            listType="picture-card"
                            showUploadList="none"
                          >
                            <div>
                              <PlusOutlined />
                              <div
                                style={{
                                  marginTop: 8,
                                }}
                              >
                                Upload
                              </div>
                            </div>
                          </Upload> */}
                        </Form.Item>

                        <Form.Item
                          className="mb-1 w-100"
                          label="Date of Opening"
                        >
                        {console.log("FormData.date-----",FormData.date)}
                        {/* { FormData?.date && */}
                          <DatePicker
                          // defaultPickerValue={dayjs(FormData.date)}
                            value={FormData?.date ? dayjs(FormData?.date,"DD/MM/YYYY"):dayjs()}
                            className=" w-100"
                            format="DD/MM/YYYY"
                            onChange={onChgDate}
                          />
                        {/* } */}
                        </Form.Item>
                        <Form.Item className="mb-1" label="Language ">
                          <Select
                            onChange={(val) => {
                              setFormData({ ...FormData, language: val });
                            }}
                            value={FormData?.language}
                          >
                            <Select.Option value="Germany">
                              Germany
                            </Select.Option>
                            <Select.Option value="English">
                              English
                            </Select.Option>
                            <Select.Option value="Spanish">
                              Spanish
                            </Select.Option>
                          </Select>
                        </Form.Item>

                        {/* <Form.Item className="mb-1" label="If Paid (Amount)">
                    <Input />
                  </Form.Item> */}
                      </Form>
                    </div>
                    <div className="col-md-12 col-12 m-0">
                      <Form
                        // form={form}
                        layout="vertical"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item label=" Desired Qualifications and Experience">
                          <TextArea
                            onChange={(e) => {
                              setFormData({
                                ...FormData,
                                description: e.target.value,
                              });
                            }}
                            value={FormData?.description}
                            rows={4}
                          />
                        </Form.Item>
                      </Form>
                    </div>
                    <p className="mb-2">Desired other formalities - </p>
                    <Checkbox onChange={() => ""}>
                      Forwarding letter from the studying institute/university
                    </Checkbox>
                    <Checkbox onChange={() => ""}> Valid Visa</Checkbox>
                    <Checkbox onChange={() => ""}> Health insurance </Checkbox>
                    {/* <Checkbox onChange={onChange}>•	Any Other </Checkbox> */}
                    <div className="col-md-12 col-12 ">
                      {editUser == true ? (
                        <Button
                          // onClick={() => navigate("/Dashboard")}
                          onClick={UpdateUser}
                          className="float-end bg-primary text-white"
                        >
                          Update User
                        </Button>
                      ) : (
                        <Button
                          // onClick={() => navigate("/Dashboard")}
                          onClick={submit}
                          className="float-end bg-primary text-white"
                        >
                          Submit
                        </Button>
                      )}
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
export default EmployerRegisterSetp2;
