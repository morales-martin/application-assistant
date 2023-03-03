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

  const formPages = [
    <UserInformation key="userInformation" />,
    <GeneratePrompts key="generatePrompts" />,
    <GenerateCoverLetter key="generateCoverLetter" />,
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
          <div className="flex flex-col w-3/5 h-3/5 max-w-lg items-center space-y-4">
            <div id="header">
              <h1 className="text-3xl font-bold text-center">
                Job application assistant
              </h1>
              <h3 className="text-sm text-center">
                Generate custom application material in seconds!
              </h3>
            </div>
            <div className="flex flex-col space-y-4 w-full h-2/3">{formPages[step]}</div>
            <Navigation step={step} setStep={setStep} numPages={formPages.length}/>
          </div>
        </div>
      </main>
    </>
  );
}
