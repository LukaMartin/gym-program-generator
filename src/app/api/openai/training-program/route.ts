import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(res: Request) {
  const { trainingDays, sessionTime, trainingGoal } = await res.json();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Provide valid JSON output. I would please like some help making a gym program. I would like to go to the gym ${trainingDays} days a week. My goal is ${trainingGoal}. I can train for ${sessionTime} minutes per session.`
      },
      {
        role: "user",
        content: "Please use the following structure for the data."
      },
      {
        role: "user",
        content: `{ training_program: [
                    {
                      id: ,
                      training_day_number: ,
                      target_muscle_group: ,
                      exercise_name: ,
                      sets: ,
                      reps: ,
                      rest: ,
                    },
                    {
                      id: ,
                      training_day_number: ,
                      target_muscle_group: ,
                      exercise_name: ,
                      sets: ,
                      reps: ,
                      rest: ,
                    },
                    ]
                  }. Please provide the rest in seconds.`
      }
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });

  return NextResponse.json({ data: response.choices[0].message.content });
}
