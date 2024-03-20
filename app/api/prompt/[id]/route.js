import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response("no prompt was found", { status: 404 });
    }
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("failed to update prompts", { status: 404 });
  }
};

export const DELETE = async (request, { params }) => {
  await connectToDB();
  try {
    await Prompt.findByIdAndDelete(params.id);
    return new Response("prompt deleted succesfully", { status: 200 });
  } catch (error) {
    return new Response("failed to delete prompts", { status: 404 });
  }
};
