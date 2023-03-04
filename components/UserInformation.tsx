import React from "react";

function UserInformation({
  description,
  setDescription,
  experience,
  setExperience,
}: {
  description: string;
  setDescription: any;
  experience: string;
  setExperience: any;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-1">
        <h1 className="text-base text-slate-600">
          Paste the job description below
        </h1>
        <textarea
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          className="flex-grow"
          placeholder="e.g. Software Engineer at Amazon with experience in React, Node, and Express..."
        ></textarea>
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="text-base text-slate-600">
          Paste your experience below
        </h1>
        <textarea
          value={experience}
          onChange={(e: any) => setExperience(e.target.value)}
          className="flex-grow"
          placeholder="e.g. Fullstack Software Engineer with 4+ years of experience. Currently working at Google, specializing in..."
        ></textarea>
      </div>
    </div>
  );
}

export default UserInformation;
