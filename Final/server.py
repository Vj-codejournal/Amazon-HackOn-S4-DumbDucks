from flask import Flask, request, jsonify
from langchain_community.document_loaders import AsyncHtmlLoader
from langchain_community.document_transformers import Html2TextTransformer
from langchain_google_genai import ChatGoogleGenerativeAI
import os
import dotenv


dotenv.load_dotenv(dotenv_path='config.env')
key = os.getenv('GOOGLE_API_KEY')
app = Flask(__name__)

llm = ChatGoogleGenerativeAI(model="gemini-pro", key=key)
# print("\n"+llm.invoke("hi").content)
html2text = Html2TextTransformer()

def load_url(url):
    urls = [url]
    loader = AsyncHtmlLoader(urls)
    docs = loader.load()
    docs_transformed = html2text.transform_documents(docs)
    doc_content = docs_transformed[0].page_content
    print(doc_content)
    return doc_content

def ask(query, url):
    doc_content = load_url(url)
    prompt = "Based on the below content, answer the query: " + doc_content + ". Now answer the query: " + query
    response = llm.invoke(prompt)
    return response.content

def analyze_review(review):
    prompt = review + " analyze all the following reviews and with their names provide whether their review is authentic or fake individually note reviews that are too positive can be fake and thier is always a fake review in provided list .give me a reviews authenticity rating between 1 to 10 based on sentimental and textual analysis of it "
    response = llm.invoke(prompt)
    return response.content

@app.route('/ask_url', methods=['POST'])
def ask_url():
    data = request.get_json()
    query = data.get('query')
    url = data.get('url')
    if not query or not url:
        return jsonify({'error': 'Query and URL are required.'}), 400
    response_content = ask(query, url)
    return jsonify({'response': response_content})

@app.route('/review', methods=['POST'])
def review():
    data = request.get_json()
    reviews = data.get('reviews')
    if not reviews:
        return jsonify({'error': 'Reviews are required.'}), 400
    response_content = analyze_review(reviews)
    return jsonify({'response': response_content})

if __name__ == '__main__':
    app.run(debug=True,port = 4000)
