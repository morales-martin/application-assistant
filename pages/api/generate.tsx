import { Configuration, OpenAIApi } from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  runtime: "edge",
};

const handler = async (req: Request) => {
  const openai = new OpenAIApi(configuration);

  const { newPrompt } = (await req.json()) as {
    newPrompt?: string;
  };

  if (!newPrompt) {
    return new Response("No prompt provided in request", { status: 400 });
  }

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: newPrompt,
      temperature: 0.3,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });

  return response;
};

export default handler;
