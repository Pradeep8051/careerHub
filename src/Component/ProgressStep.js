import React from 'react';
import {Steps} from "antd";
  import { useNavigate } from "react-router-dom";
const Step = Steps.Step;

const ProgressStep = (props) => {
  return (
    <div>
    <Steps className="m-2 p-2" direction="horizontal" size="small" current={props.step}>
    <Step title="Step 1"  />
    <Step title="Step 2"  />
    <Step title="Step 3" 
    // description="This is a description." 
     />
  </Steps>
    </div>
  );
}

export default ProgressStep;