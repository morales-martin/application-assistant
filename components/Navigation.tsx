import React from "react";

const Navigation = ({
  step,
  setStep,
  numPages,
  disable,
}: {
  step: number;
  setStep: any;
  numPages: number;
  disable: boolean;
}) => {
  return (
    <div className={`flex flex-row justify-around w-full h-12`}>
      {step > 0 && (
        <button
          disabled={disable}
          className="bg-black rounded-md w-32 text-center text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={() => setStep((prev: number) => prev - 1)}
        >
          Back
        </button>
      )}
      {step <= numPages - 2 && (
        <button
          disabled={disable}
          className="bg-black rounded-md w-32 text-center text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={() => setStep((prev: number) => prev + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Navigation;
