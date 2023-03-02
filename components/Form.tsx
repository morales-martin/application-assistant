import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col space-y-4 h-2/3">
      <div id="desc">
        <h1 className="text-base">Paste the job description below:</h1>
        <textarea
          className=" w-full h-32"
          placeholder="e.g. Software Engineer at Google..."
        ></textarea>
      </div>
      <div id="resume">
        <h1 className="text-base">Paste your experience below:</h1>
        <textarea
          className="w-full h-32"
          placeholder="e.g. Software Engineer at Google..."
        ></textarea>
      </div>
    </div>
  );
};

export default Form;
