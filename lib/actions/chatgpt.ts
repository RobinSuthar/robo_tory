"use server";
import OpenAI from "openai";
const client = new OpenAI();

export async function GPTModel(promt: string) {
  const response = await client.responses.create({
    model: "gpt-5",
    input: promt,
  });
  console.log(response.output_text);
  return response.output_text;
}
