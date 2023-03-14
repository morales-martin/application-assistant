import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import SendIcon from "@mui/icons-material/Send";
import PacmanLoader from "react-spinners/PacmanLoader";
import { toast } from "react-hot-toast";

function GenerateCoverLetter({
  generatedCoverLetter,
  generateCoverLetter,
  loading,
}: {
  generatedCoverLetter: string;
  generateCoverLetter: any;
  loading: boolean;
}) {
  return (
    <div className="flex flex-col h-full overflow-visible mx-4">
      {generatedCoverLetter.length ? (
        <React.Fragment>
          <h1 className="text-base text-slate-600">Generate cover letter</h1>
          <div
            className="flex-1 overflow-scroll"
            onClick={() => {
              navigator.clipboard.writeText(generatedCoverLetter);
              toast("Copied to clipboard", {
                icon: "✂️",
              });
            }}
          >
            {generatedCoverLetter}
          </div>
          <div className="flex justify-end">
            <span
              className=" cursor-pointer"
              onClick={(e) => generateCoverLetter(e)}
            >
              <CachedIcon />
            </span>
          </div>
        </React.Fragment>
      ) : (
        <div className="flex flex-row items-center justify-center h-full space-x-2">
          {loading ? (
            <React.Fragment>
              <h1 className="text-base text-slate-600">
                Generating cover letter
              </h1>
              <PacmanLoader
                loading={loading}
                size={"0.8rem"}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1 className="text-base text-slate-600">
                Generate cover letter
              </h1>
              <span
                className=" cursor-pointer"
                onClick={(e) => generateCoverLetter(e)}
              >
                <SendIcon />
              </span>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default GenerateCoverLetter;
