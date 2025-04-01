from flask import Flask
from chatbot.chatbot import chatbot_blueprint

app = Flask(__name__)
app.register_blueprint(chatbot_blueprint, url_prefix="/chatbot")

if __name__ == "__main__":
    app.run(debug=True, port=8000)
