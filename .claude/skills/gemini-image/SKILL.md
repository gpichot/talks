---
name: gemini-image
description: Generate images using Google Gemini AI. Use when the user wants to create AI-generated images, pictures, or visual content.
---

# Gemini Image Generator Skill

Generate images using Google's Gemini AI with natural language prompts.

## Usage

1. Ask the user what kind of image they want to generate
2. Help them craft a detailed prompt if needed (subject, style, setting, mood, details)
3. Run the generation script with the prompt and desired filename:

```bash
node generate-image.js "Your detailed image prompt here" output-filename.png
```

Example:
```bash
node generate-image.js "A futuristic banana with neon lights in a cyberpunk city" banana.png
```

4. Show the user where their generated image is saved

## Best Practices

- Encourage detailed prompts for better results (subject, style, setting, lighting, mood)
- Help users refine vague prompts with specific details
- Suggest artistic styles when appropriate (photorealistic, cartoon, cyberpunk, watercolor, etc.)
- Be conversational and creative when helping craft prompts
- The more descriptive the prompt, the better the output quality
