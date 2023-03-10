import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import SendIcon from "@mui/icons-material/Send";
import PacmanLoader from "react-spinners/PacmanLoader";

function GeneratePrompts({
  generatedAnswer,
  generateAnswer,
  questionToAnswer,
  setQuestionToAnswer,
  setGeneratedAnswer,
  loading,
}: {
  generatedAnswer: string;
  generateAnswer: any;
  questionToAnswer: string;
  setQuestionToAnswer: any;
  setGeneratedAnswer: any;
  loading: boolean;
}) {
  return (
    <div className="flex flex-col h-full overflow-visible mx-4">
      <h1 className="text-base text-slate-600">Generate answer for question</h1>
      <textarea
        value={questionToAnswer}
        onChange={(e) => {
          setQuestionToAnswer(e.target.value);
          setGeneratedAnswer("");
        }}
        className="flex-1 p-4"
        placeholder="e.g. What is your favorite language? Why choose Google?"
      ></textarea>

      {generatedAnswer.length ? (
        <React.Fragment>
          <div className="flex-1 overflow-scroll">{generatedAnswer}</div>
          <div className="flex justify-end">
            {loading ? (
              <PacmanLoader
                loading={loading}
                size={"0.8rem"}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <span
                className=" cursor-pointer"
                onClick={(e) => generateAnswer(e)}
              >
                <CachedIcon />
              </span>
            )}
          </div>
        </React.Fragment>
      ) : (
        <div className="flex justify-end">
          {loading ? (
            <PacmanLoader
              loading={loading}
              size={"0.8rem"}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <span
              className=" cursor-pointer"
              onClick={(e) => generateAnswer(e)}
            >
              <SendIcon />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default GeneratePrompts;
