import React from "react";

function GeneratePrompts() {
  return (
    <div>
      <h1 className="text-base text-slate-600">Generate answer for question</h1>
      <textarea
        className=" w-full h-32"
        placeholder="e.g. What is your favorite language? Why choose Google?"
      ></textarea>
    </div>
  );
}

export default GeneratePrompts;
