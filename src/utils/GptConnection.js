import OpenAI from "openai";
import { GPT_API_Key } from "./constants";

const openai = new OpenAI({
  apiKey: GPT_API_Key,
  dangerouslyAllowBrowser: true,
});

export default openai;