#!/usr/bin/env node

import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as os from "node:os";

// Read environment variables from ~/.env.gemini
const envPath = path.join(os.homedir(), ".env.gemini");

if (!fs.existsSync(envPath)) {
  console.error("Error: ~/.env.gemini not found");
  console.error("Please create this file with the following format:");
  console.error("GEMINI_API_KEY=your_api_key_here");
  process.exit(1);
}

// Parse the .env.gemini file
const envContent = fs.readFileSync(envPath, "utf-8");
const envVars = {};
envContent.split("\n").forEach((line) => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const [key, ...valueParts] = trimmed.split("=");
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join("=").trim();
    }
  }
});

const apiKey = envVars.GEMINI_API_KEY;

if (!apiKey) {
  console.error("Error: GEMINI_API_KEY not found in ~/.env.gemini");
  console.error("Please add the following line to ~/.env.gemini:");
  console.error("GEMINI_API_KEY=your_api_key_here");
  process.exit(1);
}

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: node generate-image.js <prompt> <output-filename>");
  console.error('Example: node generate-image.js "A futuristic banana" banana.png');
  process.exit(1);
}

const prompt = args[0];
const outputFilename = args[1];

// Initialize the Google GenAI client
const ai = new GoogleGenAI({
  apiKey: apiKey,
});

async function generateImage() {
  try {
    console.error(`Generating image: "${prompt}"...`);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: prompt,
    });

    let imageGenerated = false;
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(outputFilename, buffer);
        console.error(`Image saved to: ${outputFilename}`);
        console.log(path.resolve(outputFilename));
        imageGenerated = true;
        break;
      }
    }

    if (!imageGenerated) {
      console.error("Error: No image data received from API");
      process.exit(1);
    }
  } catch (error) {
    console.error("Error generating image:", error.message);
    process.exit(1);
  }
}

generateImage();
