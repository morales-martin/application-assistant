import React from "react";

const Navigation = ({ step, setStep, numPages }: { step: number; setStep: any; numPages:number }) => {
  return (
    <div
      className={`flex flex-row justify-around w-full h-12`}
    >
      {step > 0 && (
        <button className="bg-black rounded-md w-32 text-center text-white" onClick={() => setStep((prev:number) => prev - 1)}>
          Back
        </button>
      )}
      {step <= numPages-2 && <button className="bg-black rounded-md w-32 text-center text-white" onClick={() => setStep((prev:number) => prev + 1)}>
        Next
      </button>}
    </div>
  );
};

export default Navigation;
