import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import GenerateCoverLetter from "@/components/GenerateCoverLetter";
import GeneratePrompts from "@/components/GeneratePrompts";
import UserInformation from "@/components/UserInformation";

export default function Home() {
  const [step, setStep] = useState(0);

  const [generatedAnswer, setGeneratedAnswer] = useState<string>("");
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [questionToAnswer, setQuestionToAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  let prompt = `You are an experienced candidate filling out a job application. Here is information describing your experience: \\n${
    experience + (experience[experience.length - 1] === "." ? "" : ".")
  }\\n Here is information describing the role you are applying to: \\n${
    description + (description[description.length - 1] === "." ? "" : ".")
  }\\n`;

  const generateAnswer = async (e: any) => {
    e.preventDefault();
    setGeneratedAnswer("");
    setLoading(true);

    let newPrompt =
      prompt +
      `To the best of your ability, comprehensibly and succinctly answer the following question: \\n${
        questionToAnswer +
        (questionToAnswer[questionToAnswer.length - 1] === "." ? "" : ".")
      }`;

    try {
      await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPrompt,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => setGeneratedAnswer(data.choices[0].text));
    } catch (error) {
      console.log(JSON.stringify(error));
    }

    setLoading(false);
  };

  const generateCoverLetter = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedCoverLetter("");

    let newPrompt =
      prompt +
      `Write a cover letter based on the job description and the listed experience.`;

    try {
      await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPrompt,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => setGeneratedCoverLetter(data.choices[0].text));
    } catch (error) {
      console.log(JSON.stringify(error));
    }

    setLoading(false);
  };

  const formPages = [
    <UserInformation
      key="userInformation"
      description={description}
      setDescription={setDescription}
      experience={experience}
      setExperience={setExperience}
      />,
      <GeneratePrompts
      key="generatePrompts"
      generatedAnswer={generatedAnswer}
      generateAnswer={generateAnswer}
      questionToAnswer={questionToAnswer}
      setQuestionToAnswer={setQuestionToAnswer}
      setGeneratedAnswer={setGeneratedAnswer}
      loading={loading}
      />,
      <GenerateCoverLetter
      key="generateCoverLetter"
      generatedCoverLetter={generatedCoverLetter}
      generateCoverLetter={generateCoverLetter}
      loading={loading}
    />,
  ];

  return (
    <>
      <Head>
        <title>AI Application Assistant</title>
        <meta name="description" content="ChatGPT Application Assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <div className="flex flex-col w-full h-3/5 max-w-4xl items-center space-y-4">
            <div id="header">
              <h1 className="text-3xl font-bold text-center">
                Job application assistant
              </h1>
              <h3 className="text-sm text-center">
                Generate custom application material in seconds!
              </h3>
            </div>
            <div className="flex flex-col space-x-4 sm:space-y-4 w-full h-2/3 overflow-visible">
              {formPages[step]}
            </div>
            <Navigation
              step={step}
              setStep={setStep}
              numPages={formPages.length}
            />
          </div>
        </div>
      </main>
    </>
  );
}
