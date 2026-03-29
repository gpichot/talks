#!/usr/bin/env bash

# Read credentials from ~/.env.imgflip
if [ ! -f "$HOME/.env.imgflip" ]; then
	echo "Error: $HOME/.env.imgflip not found"
	echo "Please create this file with the following format:"
	echo "IMGFLIP_USERNAME=your_username"
	echo "IMGFLIP_PASSWORD=your_password"
	exit 1
fi

# Source the credentials file
source "$HOME/.env.imgflip"

# Check if credentials are set
if [ -z "$IMGFLIP_USERNAME" ] || [ -z "$IMGFLIP_PASSWORD" ]; then
	echo "Error: IMGFLIP_USERNAME and IMGFLIP_PASSWORD must be set in $HOME/.env.imgflip"
	exit 1
fi

# Parse arguments
TEMPLATE_ID=""
declare -A TEXT_FIELDS

while [ $# -gt 0 ]; do
	case "$1" in
	--template-id)
		TEMPLATE_ID="$2"
		shift 2
		;;
	--text[0-9]*)
		# Extract the number from --text0, --text1, etc.
		TEXT_NUM="${1#--text}"
		TEXT_FIELDS[$TEXT_NUM]="$2"
		shift 2
		;;
	*)
		echo "Unknown argument: $1"
		echo "Usage: $0 --template-id ID [--text0 \"Text\"] [--text1 \"Text\"] [--text2 \"Text\"] ..."
		exit 1
		;;
	esac
done

# Validate required arguments
if [ -z "$TEMPLATE_ID" ]; then
	echo "Error: --template-id is required"
	exit 1
fi

# Build curl command
CURL_CMD="curl -s -X POST https://api.imgflip.com/caption_image \
  -d template_id=$TEMPLATE_ID \
  -d username=$IMGFLIP_USERNAME \
  -d password=$IMGFLIP_PASSWORD"

# Add text fields if provided
for TEXT_NUM in "${!TEXT_FIELDS[@]}"; do
	CURL_CMD="$CURL_CMD -d text${TEXT_NUM}=\"${TEXT_FIELDS[$TEXT_NUM]}\""
done

# Execute curl command and parse result
RESPONSE=$(eval $CURL_CMD)

# Check if jq is available
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed. Install it with: brew install jq"
    exit 1
fi

# Check if the request was successful
SUCCESS=$(echo "$RESPONSE" | jq -r '.success')
if [ "$SUCCESS" = "true" ]; then
    # Output only the URL
    echo "$RESPONSE" | jq -r '.data.url'
else
    # Output error message to stderr
    ERROR=$(echo "$RESPONSE" | jq -r '.error_message')
    echo "Error: $ERROR" >&2
    exit 1
fi
