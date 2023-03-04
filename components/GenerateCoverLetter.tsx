import React from "react";

function GenerateCoverLetter({
  generatedCoverLetter,
  generateCoverLetter,
}: {
  generatedCoverLetter: String;
  generateCoverLetter: any;
}) {
  return (
    <div className="flex flex-col overflow-scroll bg-gray-500 full h-full rounded-lg items-center justify-center text-white">
      {generatedCoverLetter}
      <button
          className="bg-black h-12 text-white rounded-md p-3"
          onClick={(e) => generateCoverLetter(e)}
        >
          Generate
        </button>
    </div>
  );
}

export default GenerateCoverLetter;
