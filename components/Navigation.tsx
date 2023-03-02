import React, {FunctionComponent} from "react";

interface Props {
  step: number;
  setStep: any;
}

const Navigation:FunctionComponent<Props> = ({ step, setStep }) = {

    return (
    <div className="flex flex-row justify-between w-3/5">
      <button className="bg-black rounded-md w-32 text-center text-white ">
        Back
      </button>
      <button className="bg-black rounded-md w-32 text-center text-white">
        Next
      </button>
    </div>)
};

export default Navigation;
