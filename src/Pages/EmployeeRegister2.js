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
import { State, Country, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import ProgressStep from "../Component/ProgressStep";
import axios from "axios";
import { ApiEndPoint } from "../Constant/constant";
import Valoidation from "../Component/Validation";
import { ToastContainer, toast } from "react-toastify";
import Navbar2 from "./Navbar2";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const EmployeeRegister2 = () => {
  let navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const countries = Country.getAllCountries();
  const [state, setstate] = useState([]);
  const [Citys, setCitys] = useState([]);
  const [token, setToken] = useState("");
  console.log("City----", Citys);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  //   step 2 state defne
  const [AddEductaion, setAddEductaion] = useState({
    class: {
      class: "",
      name: "",
      country: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
    },
    anyDegree: {
      class: "",
      name: "",
      country: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
    },
    paramedicalDegree: {
      class: "",
      name: "",
      country: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
    },
    diploma: {
      class: "",
      name: "",
      country: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
    },
    stream: " ",
    // degree: "",
    status: "",
    year: "",
    course: "",

    // *********start***********

    status1: "",
    year1: "",
    course1: "",

    status2: "",
    year2: "",
    course2: "",
    // *********end ***********
    // otherdegree: "",
    othercertification: "",
    otherexperience: "",
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const GetToken = await sessionStorage.getItem("loginToken");
    setToken(GetToken);
  }

  //  sumbit adduction detals
  const submitdata = async () => {
    const validations = await Valoidation(AddEductaion);
    if (!validations) {
      return;
    }

    console.log("GetTokeddn", token);
    if (!Boolean(token)) {
      toast.error(`token is not available`);
      return;
    }

    const eductionDetails = {
      education: AddEductaion,
    };

    const data = await axios
      .post(ApiEndPoint.addEducation, eductionDetails, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        try {
          if (res) {
            console.log("res data", res.data);
            navigate("/");
          }
        } catch (error) {
          console.log("error-add eduction  ", error);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  console.log("AddEductaion", AddEductaion);

  return (
    <div className="vh-10 skill-bg">
    <Navbar2 />
      <ToastContainer />
      <div className="row m-0 p-0 d-flex justify-content-center ">
        <div className="col-md-8 col-12">
          <div className="card card-shadow  px-3    my-5">
            <div className="row ">
              <div className="col-md-12 col-12">
                <ProgressStep step={1} />
                <h5 className="p-2 mt-2 text-success ">
                  Profile Registration My Academic -
                  <span className="text-dark"> Step-2</span>{" "}
                </h5>
                <div className="card my-2 mt-1  p-3 ">
                  <Form
                    layout="vertical"
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <Form.Item
                          className="mb-1 fw-bold"
                          label="1. I AM A SCHOOL STUDENT "
                        >
                          <Select
                            onChange={(val) => {
                              setAddEductaion({
                                ...AddEductaion,
                                class: { ...AddEductaion.class, class: val },
                              });
                            }}
                            value={AddEductaion.class.class}
                          >
                            {/* <Select.Option value="">None</Select.Option> */}
                            <Select.Option value="11">11th Class</Select.Option>
                            <Select.Option value="12">12th Class</Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {AddEductaion.class.class != "" ? (
                        <>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Name of the School  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      name: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.name}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="Country ">
                              <Select
                                onChange={(val) => {
                                  setstate(State.getStatesOfCountry(val));
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      country: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.country}
                              >
                                {countries.map((i) => (
                                  <Select.Option
                                    key={i.isoCode}
                                    value={i.isoCode}
                                  >
                                    {i.name}
                                  </Select.Option>
                                ))}{" "}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="State ">
                              <Select
                                onChange={(val) => {
                                  let str = val.split(" ");
                                  console.log("str------", str);
                                  let cityss = City.getCitiesOfState(
                                    str[1],
                                    str[0]
                                  );
                                  setCitys(cityss);
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      state: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.state}
                              >
                                {state &&
                                  state.map((i, key) => (
                                    <Select.Option
                                      key={key}
                                      value={`${i.isoCode} ${i.countryCode}`}
                                    >
                                      {i.name}
                                    </Select.Option>
                                  ))}
                                {/* <Select.Option value="lucknow">lucknow</Select.Option>
                                <Select.Option value="gonda">gonda</Select.Option> */}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="District ">
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      district: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.district}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="City ">
                              <Select
                                onChange={(val) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: { ...AddEductaion.class, city: val },
                                  });
                                }}
                                value={AddEductaion.class.city}
                              >
                                {Citys &&
                                  Citys.map((i) => (
                                    <Select.Option value={i.name}>
                                      {i.name}
                                    </Select.Option>
                                  ))}
                              </Select>
                            </Form.Item>
                            {/* <Form.Item className="mb-1" label="City ">
                              <Input onChange={(e)=>{setAddEductaion({...AddEductaion, class:{...AddEductaion.class,district:e.target.value} })}}
                               value={AddEductaion.class.city}></Input>
                            </Form.Item> */}
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Pin code / Zip Code  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      pincode: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.pincode}
                              />
                            </Form.Item>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      <div className="col-md-12 col-12">
                        <Form.Item
                          className="mb-1 fw-bold"
                          label="2.	MY STREAM  "
                        >
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, stream: val });
                            }}
                            value={AddEductaion.stream}
                          >
                            <Select.Option value="Medical Science">
                              Medical Science
                            </Select.Option>
                            <Select.Option value="Engineering Science">
                              Engineering Science
                            </Select.Option>
                            <Select.Option value="General Science">
                              General Science
                            </Select.Option>
                            <Select.Option value="Commerce">
                              Commerce
                            </Select.Option>
                            <Select.Option value="Arts/Humanities">
                              Arts/Humanities
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="col-md-12 col-12">
                      <h6 className="my-2 fw-bold" style={{fontSize:14}}>3. MY MEDICAL BACHELOR DEGREE</h6>
                        {/* <Form.Item
                          className="mb-1 fw-bold"
                          label="3 (A) MY MEDICAL BACHELOR DEGREE   "
                        >
                           <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, degree: val });
                            }}
                            value={AddEductaion.degree}
                          >
                            <Select.Option value="Medical Science">
                              Medical Science,
                            </Select.Option>
                            <Select.Option value="Engineering">
                              Engineering
                            </Select.Option>
                          </Select> 
                        </Form.Item> */}
                      </div>

                      <div className="col-md-4 col-12">
                        <Form.Item
                          className="mb-1"
                          label="Completed / Pursuing   "
                        >
                          {/* <Input  onChange={(e)=>{setAddEductaion({...AddEductaion, year:e.target.value })}}
                               value={AddEductaion.year}/> */}
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, status: val });
                            }}
                            value={AddEductaion.status}
                          >
                            <Select.Option value="Completed">
                              Completed
                            </Select.Option>
                            <Select.Option value="Pursuing">
                              Pursuing
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>

                      
                      <div className="col-md-4 col-12">
                        <Form.Item
                          className="mb-1 "
                          label=" Year of completed/pursuing   "
                        >
                          <Input
                            onChange={(e) => {
                              setAddEductaion({
                                ...AddEductaion,
                                year: e.target.value,
                              });
                            }}
                            value={AddEductaion.year}
                          />
                          {/* <DatePicker className="w-100" /> */}
                        </Form.Item>
                      </div>
                      <div className="col-md-4 col-12">
                        <Form.Item className="mb-1 " label="Course - ">
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, course: val });
                            }}
                            value={AddEductaion.course}
                          >
                            <Select.Option value="Ayurvedic Medicine and Surgery">Ayurvedic Medicine and Surgery</Select.Option>
                            <Select.Option value="Dental Surgery">Dental Surgery</Select.Option>
                            <Select.Option value="Medicine and Bachelor of Surgery">Medicine and Bachelor of Surgery</Select.Option>
                            <Select.Option value="Naturopathy and Yoga Sciences">Naturopathy and Yoga Sciences</Select.Option>
                            <Select.Option value="Siddha Medicine and Surgery">Siddha Medicine and Surgery</Select.Option> 	
                            <Select.Option value="Unani Medicine and Surgery">Unani Medicine and Surgery</Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {/* **********************start********************* */}

                      
                        <>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Name of the Institution / College  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      name: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.name}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="Country ">
                              <Select
                                onChange={(val) => {
                                  setstate(State.getStatesOfCountry(val));
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      country: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.country}
                              >
                                {countries.map((i) => (
                                  <Select.Option
                                    key={i.isoCode}
                                    value={i.isoCode}
                                  >
                                    {i.name}
                                  </Select.Option>
                                ))}{" "}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="State ">
                              <Select
                                onChange={(val) => {
                                  let str = val.split(" ");
                                  console.log("str------", str);
                                  let cityss = City.getCitiesOfState(
                                    str[1],
                                    str[0]
                                  );
                                  setCitys(cityss);
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      state: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.state}
                              >
                                {state &&
                                  state.map((i, key) => (
                                    <Select.Option
                                      key={key}
                                      value={`${i.isoCode} ${i.countryCode}`}
                                    >
                                      {i.name}
                                    </Select.Option>
                                  ))}
                                {/* <Select.Option value="lucknow">lucknow</Select.Option>
                                <Select.Option value="gonda">gonda</Select.Option> */}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="District ">
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      district: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.district}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="City ">
                              <Select
                                onChange={(val) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: { ...AddEductaion.class, city: val },
                                  });
                                }}
                                value={AddEductaion.class.city}
                              >
                                {Citys &&
                                  Citys.map((i) => (
                                    <Select.Option value={i.name}>
                                      {i.name}
                                    </Select.Option>
                                  ))}
                              </Select>
                            </Form.Item>
                            {/* <Form.Item className="mb-1" label="City ">
                              <Input onChange={(e)=>{setAddEductaion({...AddEductaion, class:{...AddEductaion.class,district:e.target.value} })}}
                               value={AddEductaion.class.city}></Input>
                            </Form.Item> */}
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Pin code / Zip Code  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    class: {
                                      ...AddEductaion.class,
                                      pincode: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.class.pincode}
                              />
                            </Form.Item>
                          </div>
                        </>
                     


                      {/* **************************end******************* */}


                      <div className="col-md-12 col-12">
                      <h6 className="my-2 fw-bold" style={{fontSize:14}}>4. MY PARAMEDICAL BACHELOR’S DEGREE IN </h6>
                        {/* <Form.Item
                          className="mb-1 fw-bold"
                          label="3 (A) MY MEDICAL BACHELOR DEGREE   "
                        >
                           <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, degree: val });
                            }}
                            value={AddEductaion.degree}
                          >
                            <Select.Option value="Medical Science">
                              Medical Science,
                            </Select.Option>
                            <Select.Option value="Engineering">
                              Engineering
                            </Select.Option>
                          </Select> 
                        </Form.Item> */}
                      </div>

                      <div className="col-md-4 col-12">
                        <Form.Item
                          className="mb-1"
                          label="Completed / Pursuing   "
                        >
                          {/* <Input  onChange={(e)=>{setAddEductaion({...AddEductaion, year:e.target.value })}}
                               value={AddEductaion.year}/> */}
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, status1: val });
                            }}
                            value={AddEductaion.status1}
                          >
                            <Select.Option value="Completed">
                              Completed
                            </Select.Option>
                            <Select.Option value="Pursuing">
                              Pursuing
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>

                      
                      <div className="col-md-4 col-12">
                        <Form.Item
                          className="mb-1 "
                          label=" Year of completed/pursuing   "
                        >
                          <Input
                            onChange={(e) => {
                              setAddEductaion({
                                ...AddEductaion,
                                year1: e.target.value,
                              });
                            }}
                            value={AddEductaion.year1}
                          />
                          {/* <DatePicker className="w-100" /> */}
                        </Form.Item>
                      </div>
                      <div className="col-md-4 col-12">
                        <Form.Item className="mb-1 " label="Course - ">
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, course1: val });
                            }}
                            value={AddEductaion.course1}
                          >
                            <Select.Option value="Anaesthesia technology">Anaesthesia technology</Select.Option>
                            <Select.Option value="Audiology and Speech therapy">Audiology and Speech therapy</Select.Option>
                            <Select.Option value="Audiology and Speech Therapy">Audiology and Speech Therapy</Select.Option>
                            <Select.Option value="Biomedical Engineering">Biomedical Engineering</Select.Option>
                            <Select.Option value="Cardiac or Cardiovascular Technology">Cardiac or Cardiovascular Technology</Select.Option> 	
                            <Select.Option value="Dialysis Technology">Dialysis Technology</Select.Option> 	
                            <Select.Option value="Healthcare Management">Healthcare Management</Select.Option> 	
                            <Select.Option value="Medical Laboratory Technology">Medical Laboratory Technology</Select.Option> 	
                            <Select.Option value="Medical Record Technology">Medical Record Technology</Select.Option> 	
                            <Select.Option value="Microbiology">Microbiology</Select.Option> 	
                            <Select.Option value="Nursing and Midwifery">Nursing and Midwifery</Select.Option> 	
                            <Select.Option value="Nutrition and Dietetics">Nutrition and Dietetics</Select.Option> 	
                            <Select.Option value="Occupational Therapy">Occupational Therapy</Select.Option> 	
                            <Select.Option value="Operation Theater Technology">Operation Theater Technology</Select.Option> 	
                            <Select.Option value="Ophthalmic technology">Ophthalmic technology</Select.Option> 	
                            <Select.Option value="Optometry">Optometry</Select.Option> 	
                            <Select.Option value="Physiotherapy">Physiotherapy</Select.Option> 	
                            <Select.Option value="Psychology">Psychology</Select.Option> 	
                            <Select.Option value="Radiography and Medical Imaging">Radiography and Medical Imaging</Select.Option> 	
                            <Select.Option value="Biotechnology">Biotechnology</Select.Option> 	
                            <Select.Option value="Respiratory Therapy">Respiratory Therapy</Select.Option>
                            <Select.Option value="X-Ray technology">X-Ray technology</Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {/* **********************start********************* */}

                      
                        <>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Name of the Institution / College  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    paramedicalDegree: {
                                      ...AddEductaion.paramedicalDegree,
                                      name: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.paramedicalDegree.name}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="Country ">
                              <Select
                                onChange={(val) => {
                                  setstate(State.getStatesOfCountry(val));
                                  setAddEductaion({
                                    ...AddEductaion,
                                    paramedicalDegree: {
                                      ...AddEductaion.paramedicalDegree,
                                      country: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.paramedicalDegree.country}
                              >
                                {countries.map((i) => (
                                  <Select.Option
                                    key={i.isoCode}
                                    value={i.isoCode}
                                  >
                                    {i.name}
                                  </Select.Option>
                                ))}{" "}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="State ">
                              <Select
                                onChange={(val) => {
                                  let str = val.split(" ");
                                  console.log("str------", str);
                                  let cityss = City.getCitiesOfState(
                                    str[1],
                                    str[0]
                                  );
                                  setCitys(cityss);
                                  setAddEductaion({
                                    ...AddEductaion,
                                    paramedicalDegree: {
                                      ...AddEductaion.paramedicalDegree,
                                      state: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.paramedicalDegree.state}
                              >
                                {state &&
                                  state.map((i, key) => (
                                    <Select.Option
                                      key={key}
                                      value={`${i.isoCode} ${i.countryCode}`}
                                    >
                                      {i.name}
                                    </Select.Option>
                                  ))}
                                {/* <Select.Option value="lucknow">lucknow</Select.Option>
                                <Select.Option value="gonda">gonda</Select.Option> */}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="District ">
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    paramedicalDegree: {
                                      ...AddEductaion.paramedicalDegree,
                                      district: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.paramedicalDegree.district}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="City ">
                              <Select
                                onChange={(val) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    paramedicalDegree: { ...AddEductaion.paramedicalDegree, city: val },
                                  });
                                }}
                                value={AddEductaion.paramedicalDegree.city}
                              >
                                {Citys &&
                                  Citys.map((i) => (
                                    <Select.Option value={i.name}>
                                      {i.name}
                                    </Select.Option>
                                  ))}
                              </Select>
                            </Form.Item>
                            {/* <Form.Item className="mb-1" label="City ">
                              <Input onChange={(e)=>{setAddEductaion({...AddEductaion, class:{...AddEductaion.class,district:e.target.value} })}}
                               value={AddEductaion.class.city}></Input>
                            </Form.Item> */}
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Pin code / Zip Code  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    paramedicalDegree: {
                                      ...AddEductaion.paramedicalDegree,
                                      pincode: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.paramedicalDegree.pincode}
                              />
                            </Form.Item>
                          </div>
                        </>



                       {/* **********************end2********************* */}



                       <div className="col-md-12 col-12">
                      <h6 className="my-2 fw-bold" style={{fontSize:14}}>5.	MY PARAMEDICAL DIPLOMA IN  </h6>
                        {/* <Form.Item
                          className="mb-1 fw-bold"
                          label="3 (A) MY MEDICAL BACHELOR DEGREE   "
                        >
                           <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, degree: val });
                            }}
                            value={AddEductaion.degree}
                          >
                            <Select.Option value="Medical Science">
                              Medical Science,
                            </Select.Option>
                            <Select.Option value="Engineering">
                              Engineering
                            </Select.Option>
                          </Select> 
                        </Form.Item> */}
                      </div>

                      <div className="col-md-4 col-12">
                        <Form.Item
                          className="mb-1"
                          label="Completed / Pursuing   "
                        >
                          {/* <Input  onChange={(e)=>{setAddEductaion({...AddEductaion, year:e.target.value })}}
                               value={AddEductaion.year}/> */}
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, status2: val });
                            }}
                            value={AddEductaion.status2}
                          >
                            <Select.Option value="Completed">
                              Completed
                            </Select.Option>
                            <Select.Option value="Pursuing">
                              Pursuing
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>

                      
                      <div className="col-md-4 col-12">
                        <Form.Item
                          className="mb-1 "
                          label=" Year of completed/pursuing   "
                        >
                          <Input
                            onChange={(e) => {
                              setAddEductaion({
                                ...AddEductaion,
                                year2: e.target.value,
                              });
                            }}
                            value={AddEductaion.year2}
                          />
                          {/* <DatePicker className="w-100" /> */}
                        </Form.Item>
                      </div>
                      <div className="col-md-4 col-12">
                        <Form.Item className="mb-1 " label="Course - ">
                          <Select
                            onChange={(val) => {
                              setAddEductaion({ ...AddEductaion, course2: val });
                            }}
                            value={AddEductaion.course2}
                          >
                            <Select.Option value="Anaesthesia technology">Anaesthesia technology</Select.Option>
                            <Select.Option value="Dialysis Technology">Dialysis Technology</Select.Option> 	
                            <Select.Option value="ECG Technology">ECG Technology</Select.Option> 	
                            <Select.Option value="Hearing language and speech">Hearing language and speech</Select.Option>
                            <Select.Option value="Medical Laboratory Technology">Medical Laboratory Technology</Select.Option>
                            <Select.Option value="Medical Record Technology">Medical Record Technology</Select.Option>
                            <Select.Option value="Nursing Care Assistance">Nursing Care Assistance</Select.Option> 	
                            <Select.Option value="Operation Theatre Technology">Operation Theatre Technology</Select.Option> 	
                            <Select.Option value="Ophthalmic technology">Ophthalmic technology</Select.Option> 	
                            <Select.Option value="Physiotherapy">Physiotherapy</Select.Option> 	
                            <Select.Option value="Radiography and Medical Imaging">Radiography and Medical Imaging</Select.Option> 	
                            <Select.Option value="Sanitary Inspection">Sanitary Inspection</Select.Option>
                            <Select.Option value="X-Ray technology">X-Ray technology</Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {/* **********************start********************* */}

                      
                        <>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Name of the Institution / College  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    diploma: {
                                      ...AddEductaion.diploma,
                                      name: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.diploma.name}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="Country ">
                              <Select
                                onChange={(val) => {
                                  setstate(State.getStatesOfCountry(val));
                                  setAddEductaion({
                                    ...AddEductaion,
                                    diploma: {
                                      ...AddEductaion.diploma,
                                      country: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.diploma.country}
                              >
                                {countries.map((i) => (
                                  <Select.Option
                                    key={i.isoCode}
                                    value={i.isoCode}
                                  >
                                    {i.name}
                                  </Select.Option>
                                ))}{" "}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="State ">
                              <Select
                                onChange={(val) => {
                                  let str = val.split(" ");
                                  console.log("str------", str);
                                  let cityss = City.getCitiesOfState(
                                    str[1],
                                    str[0]
                                  );
                                  setCitys(cityss);
                                  setAddEductaion({
                                    ...AddEductaion,
                                    diploma: {
                                      ...AddEductaion.diploma,
                                      state: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.diploma.state}
                              >
                                {state &&
                                  state.map((i, key) => (
                                    <Select.Option
                                      key={key}
                                      value={`${i.isoCode} ${i.countryCode}`}
                                    >
                                      {i.name}
                                    </Select.Option>
                                  ))}
                                {/* <Select.Option value="lucknow">lucknow</Select.Option>
                                <Select.Option value="gonda">gonda</Select.Option> */}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="District ">
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    diploma: {
                                      ...AddEductaion.diploma,
                                      district: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.diploma.district}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="City ">
                              <Select
                                onChange={(val) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    diploma: { ...AddEductaion.diploma, city: val },
                                  });
                                }}
                                value={AddEductaion.diploma.city}
                              >
                                {Citys &&
                                  Citys.map((i) => (
                                    <Select.Option value={i.name}>
                                      {i.name}
                                    </Select.Option>
                                  ))}
                              </Select>
                            </Form.Item>
                            {/* <Form.Item className="mb-1" label="City ">
                              <Input onChange={(e)=>{setAddEductaion({...AddEductaion, class:{...AddEductaion.class,district:e.target.value} })}}
                               value={AddEductaion.class.city}></Input>
                            </Form.Item> */}
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Pin code / Zip Code  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    diploma: {
                                      ...AddEductaion.diploma,
                                      pincode: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.diploma.pincode}
                              />
                            </Form.Item>
                          </div>
                        </>



                       {/* **********************end3********************* */}
                      {/* <div className="col-md-12 col-12">
                        <Form.Item
                          className="mb-1 fw-bold"
                          label="(B) Any Other Bachelor Degree  "
                        >
                          <Select
                            onChange={(val) => {
                              setAddEductaion({
                                ...AddEductaion,
                                anyDegree: {
                                  ...AddEductaion.anyDegree,
                                  class: val,
                                },
                              });
                            }}
                            value={AddEductaion.anyDegree.class}
                          >
                            <Select.Option value="">None</Select.Option>
                            <Select.Option value="deMedical Sciencemo">
                              Medical Science,
                            </Select.Option>
                            <Select.Option value="Engineering">
                              Engineering
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {AddEductaion.anyDegree.class != "" ? (
                        <>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Name of the Institution / College  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    anyDegree: {
                                      ...AddEductaion.anyDegree,
                                      name: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.anyDegree.name}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="Country ">
                              <Select
                                onChange={(val) => {
                                  setstate(State.getStatesOfCountry(val));

                                  setAddEductaion({
                                    ...AddEductaion,
                                    anyDegree: {
                                      ...AddEductaion.anyDegree,
                                      country: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.anyDegree.country}
                              >
                                {countries.map((i) => (
                                  <Select.Option
                                    key={i.isoCode}
                                    value={i.isoCode}
                                  >
                                    {i.name}
                                  </Select.Option>
                                ))}{" "}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="State ">
                              <Select
                                onChange={(val) => {
                                  let str = val.split(" ");
                                  console.log("str------", str);
                                  let cityss = City.getCitiesOfState(
                                    str[1],
                                    str[0]
                                  );
                                  setCitys(cityss);
                                  setAddEductaion({
                                    ...AddEductaion,
                                    anyDegree: {
                                      ...AddEductaion.anyDegree,
                                      state: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.anyDegree.state}
                              >
                                {state &&
                                  state.map((i, key) => (
                                    <Select.Option
                                      key={key}
                                      value={`${i.isoCode} ${i.countryCode}`}
                                    >
                                      {i.name}
                                    </Select.Option>
                                  ))}
                              </Select>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="District ">
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    anyDegree: {
                                      ...AddEductaion.anyDegree,
                                      district: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.anyDegree.district}
                              ></Input>
                            </Form.Item>
                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item className="mb-1" label="City ">
                              <Select
                                onChange={(val) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    anyDegree: {
                                      ...AddEductaion.anyDegree,
                                      city: val,
                                    },
                                  });
                                }}
                                value={AddEductaion.anyDegree.city}
                              >
                                {Citys &&
                                  Citys.map((i) => (
                                    <Select.Option value={i.name}>
                                      {i.name}
                                    </Select.Option>
                                  ))}
                              </Select>
                            </Form.Item>

                          </div>
                          <div className="col-md-4 col-12">
                            <Form.Item
                              className="mb-1"
                              label="Pin code / Zip Code  "
                            >
                              <Input
                                onChange={(e) => {
                                  setAddEductaion({
                                    ...AddEductaion,
                                    anyDegree: {
                                      ...AddEductaion.anyDegree,
                                      pincode: e.target.value,
                                    },
                                  });
                                }}
                                value={AddEductaion.anyDegree.pincode}
                              />
                            </Form.Item>
                          </div>
                        </>
                      ) : (
                        ""
                      )} */}
                    </div>
                    <div className="col-md-12 col-12 mt-1">
                      <Form.Item
                        className="fw-bold"
                        label="6. Other Certifications if any "
                      >
                        <TextArea
                          onChange={(e) => {
                            setAddEductaion({
                              ...AddEductaion,
                              othercertification: e.target.value,
                            });
                          }}
                          value={AddEductaion.othercertification}
                          rows={2}
                        />
                      </Form.Item>
                    </div>
                    <div className="col-md-12 col-12 m-0 ">
                      <Form.Item className="fw-bold" label="7. Experience if any ">
                        <TextArea
                          onChange={(e) => {
                            setAddEductaion({
                              ...AddEductaion,
                              otherexperience: e.target.value,
                            });
                          }}
                          value={AddEductaion.otherexperience}
                          rows={2}
                        />
                      </Form.Item>
                    </div>
                  </Form>

                  {/* <div className="col-md-12 col-12 m-0">
                      <Form
                        // form={form}
                        layout="vertical"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item label=" Desired Qualifications and Experience">
                          <TextArea rows={2} />
                        </Form.Item>
                      </Form>
                    </div>
                    <p className="mb-2">Desired other formalities - </p>
                    <Checkbox onChange={() => ""}>
                      {" "}
                      Forwarding letter from the studying institute/university
                    </Checkbox>
                    <Checkbox onChange={() => ""}> Valid Visa</Checkbox>
                    <Checkbox onChange={() => ""}> Health insurance </Checkbox> */}
                  {/* <Checkbox onChange={onChange}>•	Any Other </Checkbox> */}
                  <div className="col-md-12 col-12 ">
                    <Button
                      onClick={submitdata}
                      // onClick={() => navigate("/HomePage")}
                      className="float-end bg-primary text-white"
                    >
                      Submit
                    </Button>
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
export default EmployeeRegister2;
