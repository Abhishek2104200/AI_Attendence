from flask import Flask, request, jsonify
from chatbot.chatbot import get_chatbot_reply  # Import the function from chatbot.py

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')

    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    # Get reply from the chatbot
    reply = get_chatbot_reply(user_message)

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
