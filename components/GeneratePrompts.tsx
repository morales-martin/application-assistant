import React from "react";

function GeneratePrompts({
  generatedAnswer,
  generateAnswer,
  questionToAnswer,
  setQuestionToAnswer,
}: {
  generatedAnswer: string;
  generateAnswer: any;
  questionToAnswer: string;
  setQuestionToAnswer: any;
}) {
  return (
    <div className="flex flex-col h-full overflow-visible">
      <h1 className="text-base text-slate-600">Generate answer for question</h1>
      <textarea
        value={questionToAnswer}
        onChange={(e) => setQuestionToAnswer(e.target.value)}
        className="flex-1"
        placeholder="e.g. What is your favorite language? Why choose Google?"
      ></textarea>
      <div className="flex-1 overflow-scroll">{generatedAnswer}</div>
      <div className="flex flex-1 justify-center align-middle">
        <button
          className="bg-black h-12 text-white rounded-md p-3"
          onClick={(e) => generateAnswer(e)}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default GeneratePrompts;
