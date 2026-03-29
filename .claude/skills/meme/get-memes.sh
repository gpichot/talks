#!/bin/bash

# Cache directory and file
CACHE_DIR="$HOME/.cache/imgflip"
CACHE_FILE="$CACHE_DIR/memes.json"
CACHE_DURATION=604800  # 7 days in seconds

# Create cache directory if it doesn't exist
mkdir -p "$CACHE_DIR"

# Function to check if cache is valid
is_cache_valid() {
    if [ ! -f "$CACHE_FILE" ]; then
        return 1
    fi

    # Get file modification time
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        FILE_TIME=$(stat -f %m "$CACHE_FILE")
    else
        # Linux
        FILE_TIME=$(stat -c %Y "$CACHE_FILE")
    fi

    CURRENT_TIME=$(date +%s)
    AGE=$((CURRENT_TIME - FILE_TIME))

    if [ $AGE -lt $CACHE_DURATION ]; then
        return 0
    else
        return 1
    fi
}

# Check if we should use cache
if is_cache_valid; then
    # Use cached version
    cat "$CACHE_FILE"
    exit 0
fi

# Fetch from API
RESPONSE=$(curl -s https://api.imgflip.com/get_memes)

# Check if the request was successful
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed. Install it with: brew install jq" >&2
    exit 1
fi

SUCCESS=$(echo "$RESPONSE" | jq -r '.success')
if [ "$SUCCESS" = "true" ]; then
    # Save to cache
    echo "$RESPONSE" > "$CACHE_FILE"
    # Output the response
    echo "$RESPONSE"
else
    # Output error message to stderr
    ERROR=$(echo "$RESPONSE" | jq -r '.error_message')
    echo "Error: $ERROR" >&2
    exit 1
fi
