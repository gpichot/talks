---
name: meme
description: Generate memes using the imgflip API. Use when the user wants to create a meme, make a funny image, or generate meme content.
---

# Meme Generator Skill

Generate memes using the imgflip API with popular templates.

## How this works

Follow these steps to generate a meme:

### 1. Fetch available meme templates

Use the provided bash script `get-memes.sh` which fetches and caches meme templates:

```bash
./get-memes.sh
```

This script caches the API response for 7 days to avoid unnecessary API calls. Look for the `id`, `name`, and `url` fields in the response.

### 2. Show templates to the user

Present a selection of popular meme templates (at least 8-10 options) with their names. For example:

- Drake Hotline Bling
- Distracted Boyfriend
- Two Buttons
- Batman Slapping Robin
- Change My Mind
- etc.

Ask the user which template they want to use, or let them describe the meme they have in mind.

### 3. Get meme text from user

Most memes have two text fields:

- **text0**: Top text
- **text1**: Bottom text

Ask the user for both pieces of text. Be conversational and fun!

### 4. Generate the meme

Use the provided bash script `generate-meme.sh` which reads credentials from `$HOME/.env.imgflip`:

```bash
./generate-meme.sh --template-id TEMPLATE_ID --text0 "TEXT" --text1 "TEXT" --text2 "TEXT" ...
```

**Important notes:**

- Replace `TEMPLATE_ID` with the actual template ID from step 2
- The script supports multiple text fields: --text0, --text1, --text2, --text3, etc.
- Use as many text fields as the meme template requires (check box_count in template data)
- The script will automatically handle credentials and error messages if credentials are not configured

### 5. Display the result

The API returns JSON like:

```json
{
  "success": true,
  "data": {
    "url": "https://i.imgflip.com/xxxxx.jpg",
    "page_url": "https://imgflip.com/i/xxxxx"
  }
}
```

Show the user the `url` where they can view their generated meme!

## Tips

- Be fun and conversational when helping users create memes
- If the user isn't sure which template to use, help them based on their description
- Some meme templates may have more than 2 text boxes - check the template details if needed
- The meme URL is permanent and can be shared
