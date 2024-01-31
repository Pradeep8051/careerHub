import React from 'react';
import JobCard from './Component/JobCard';
import Navbaar from './Pages/Navbaar';
import { Checkbox, Select } from 'antd';
import { Form } from 'antd';

const Home = () => {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Navbaar />

      <div className="row m-0 p-0">
        <div className="col-md-3 col-12 ">
          <div className="p-2 mt-2 border rounded p-2 bg-white h-100">
            <div className="p-2">
              <div class="filterUi">
                <p>
                  <i
                    class="fa fa-filter text-primary me-2 "
                    aria-hidden="true"
                  ></i>

                  <span id="filter_ui_heading_desktop" class="heading_5">
                    Filters
                  </span>
                </p>
              </div>
              <Form
                layout="vertical"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
              >
                <Checkbox>
                  <p className="text-dark ">As per my preferences</p>
                </Checkbox>
                <Form.Item className="mb-1 fw-bold mt-1" label="Profile">
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Profile"
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
                <Form.Item className="mb-1 fw-bold mt-1 mb-3" label="Location">
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="e.g Delhi"
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>

                <Checkbox className="w-100 mb-2">
                  <p className="text-dark ">Work from home</p>
                </Checkbox>
                <Checkbox className="w-100 mb-2">
                  <p className="text-dark ">Part-time</p>
                </Checkbox>
                <Checkbox className="w-100 mb-2">
                  <p className="text-dark ">Include all internships</p>
                </Checkbox>
                <Form.Item
                  className="mb-1 fw-bold mt-1"
                  label="Years of experience"
                >
                  <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Select Years of experience"
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
              </Form>
              <div>
                <p className="float-end text-primary  font-bold my-2 h-25">
                  Clear all
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="p-2 mt-2 border rounded p-2 bg-white ">
            <h5 className="fw-bold mx-3 mt-3">Jobs</h5>
            <p className=" mx-3 mt-1">
              as per your<span className="text-primary"> Preferences</span>{" "}
            </p>
            <div className="row mt-3">
              <div className="col-md-4 col-12">
                <JobCard />
              </div>
              <div className="col-md-4 col-12">
                <JobCard />
              </div>
              <div className="col-md-4 col-12">
                <JobCard />
              </div>
              {/* <div className='col-md-4 col-12'>
          <JobCard/>
        </div> */}
            </div>
            <div className="row ">
              <div className="col-md-4 col-12">
                <JobCard />
              </div>
              <div className="col-md-4 col-12">
                <JobCard />
              </div>
              <div className="col-md-4 col-12">
                <JobCard />
              </div>
              {/* <div className='col-md-4 col-12'>
          <JobCard/>
        </div> */}
            </div>
          </div>
        </div>
        `
      </div>
    </div>
  );
};

export default Home;
