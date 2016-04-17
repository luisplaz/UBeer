#!/bin/bash


# speech: "I want five packs of Corona at 10:00pm."
AUDIO="audio3-corona.ogg"

curl -X POST -u "0bd0201d-4ba5-4ad5-b720-bef3a15b9a2f":"UkqyOzthOIzP" -H "content-type: audio/ogg" --data-binary @$AUDIO "https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&word_alternatives_threshold=0.9"
