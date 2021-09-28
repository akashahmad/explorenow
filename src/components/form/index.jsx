import React from "react";
import { H, P } from "@atoms";
const Form = () => {
  return (
    <>
      <div className=" w-7/12">
        {" "}
        <div className="pt-5 ">
        <H HeadingMainBlue>Leave Your Comment</H>
        </div>
        <div className="flex justify-between">
          <div className="pt-3 pb-2">
            <P>Name</P>
            <input className="border-2 outline-none px-8 py-1" />
          </div>
          <div  className="pt-3 pb-2">
            <P>Email</P>
            <input className="border-2 outline-none px-8 py-1" />
          </div>
        </div>
        <div  className=" pb-2">
        <P>Comment</P>
        </div>
        <textarea rows="6" className="w-full outline-none border-2"/>
        <button className=" bg-light-blue px-12 py-1 text-white mt-3">Post Comment</button>
      </div>
    </>
  );
};
export default Form;
