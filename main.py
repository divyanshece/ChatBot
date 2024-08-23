# Ai Chat Boy
import os
import google.generativeai as genai

genai.configure(api_key="AIzaSyBFRDSTJKg0fUJ24KaBKnSMwUbRmPvlRjg")

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}
model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,)
chat_session = model.start_chat(history=[])
query = input("You: ")
response = chat_session.send_message(query)
print("Gemini: ", response.text)
