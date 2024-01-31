import React from 'react';
import { toast } from "react-toastify";

const Valoidation = (data) => {
  for (let key in data) {
    console.log("data[key]-----12",data,key,data[key],data[key]!=0)
    if (data.hasOwnProperty(key) && (data[key] == "" && data[key] !== 0)) {
      toast.error(`please insert ${key} `);
      return false;
    }
  }

  return true;
};

export default Valoidation;
