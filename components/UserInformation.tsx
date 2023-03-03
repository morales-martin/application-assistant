import React from "react";

function UserInformation() {
  return (
    <React.Fragment>
      <div id="desc">
        <h1 className="text-base text-slate-600">Paste the job description below</h1>
        <textarea
          className=" w-full h-32"
          placeholder="e.g. Software Engineer at Amazon with experience in React, Node, and Express..."
        ></textarea>
      </div>
      <div id="resume">
        <h1 className="text-base text-slate-600">Paste your experience below</h1>
        <textarea
          className="w-full h-32"
          placeholder="e.g. Fullstack Software Engineer with 4+ years of experience. Currently working at Google, specializing in..."
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default UserInformation;
