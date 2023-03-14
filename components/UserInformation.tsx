import React from "react";

function UserInformation({
  description,
  setDescription,
  experience,
  setExperience,
  setDisable,
}: {
  description: string;
  setDescription: any;
  experience: string;
  setExperience: any;
  setDisable: any;
}) {
  return (
    <div className="flex flex-col sm:flex-row h-full mx-4">
      <div className="flex flex-col flex-1 p-2">
        <h1 className="text-base text-slate-600">
          Paste the job description below
        </h1>
        <textarea
          value={description}
          onChange={(e: any) => {
            setDescription(e.target.value);
            setDisable(e.target.value.length === 0 || experience.length === 0);
          }}
          className="flex-grow p-4"
          placeholder="e.g. Software Engineer at Amazon with experience in React, Node, and Express..."
        ></textarea>
      </div>
      <div className="flex flex-col flex-1 p-2">
        <h1 className="text-base text-slate-600">
          Paste your experience below
        </h1>
        <textarea
          value={experience}
          onChange={(e: any) => {
            setExperience(e.target.value);
            setDisable(e.target.value.length === 0 || description.length === 0);
          }}
          className="flex-grow p-4"
          placeholder="e.g. Fullstack Software Engineer with 4+ years of experience. Currently working at Google, specializing in..."
        ></textarea>
      </div>
    </div>
  );
}

export default UserInformation;
