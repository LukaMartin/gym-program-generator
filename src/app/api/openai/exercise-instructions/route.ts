import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(res: Request) {
  const { searchText } = await res.json();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Provide valid JSON output. Could I please have instructions for ${searchText}. Please use the following structure for the data.`
      },
      {
        role: "user",
        content: `{ instructions: [
                    {
                      setup: ,
                      initial_position: ,
                      movement: ,
                      breathing: ,
                      common_mistakes: ,
                    },
                    ]
                  }.`
      }
     
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });

  
  return NextResponse.json({ data: response.choices[0].message });
}