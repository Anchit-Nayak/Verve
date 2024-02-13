# 🚀 Verve Blog

Welcome to Verve Blog! This full-stack blog website enables you to create and share your thoughts with the world. It's built using React, Tailwind CSS, Express, Node.js, MongoDB, FalconAI text summarization API, React-Quill, and more.

## Features

- **User-friendly Interface:** Enjoy a sleek and intuitive UI powered by React and Tailwind CSS.
- **Text Summarization:** Utilizes FalconAI's powerful text summarization API to summarize lengthy articles.
- **Rich Text Editor:** Compose your blog posts effortlessly with React-Quill's rich text editor.
  

## Snapshots

#### Sign-In Page
![Alt text](https://i.postimg.cc/mrm5WV2h/Screenshot-from-2024-02-14-01-34-09.png "SignIn Page")

#### Home Page
![Alt text](https://i.postimg.cc/s2j7FT7b/Screenshot-from-2024-02-14-01-23-14.png "Home Page")

#### View A Blog Post
![Alt text](https://i.postimg.cc/jdVGHFpH/Screenshot-from-2024-02-14-01-29-06.png "View Blog Post")

#### Create Your Own Blog
![Alt text](https://i.postimg.cc/MGpQNmFs/Screenshot-from-2024-02-14-01-31-58.png "Create Your Own Blog")

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. For Client:
   1. Navigate to client directory: `cd client`
   2. Install dependencies: `npm install`
   3. Create a `.env` file and add your Hugging Face API key to the `.env` file in the following format:
      ```
      VITE_HF_TOKEN = YOUR_KEY
      
      ```
      
   4. Start client: `npm run dev`
4. For Server:
   1. Navigate to server directory: `cd server`
   2. Make sure you have Node.js installed:
      ```
      node --version
      
      ```
      
   3. Install dependencies: `npm install`
   4. Create a `.env` file in the server directory.
   5. Add your MongoDB connection details and Auth Details to the `.env` file in the following format:
      ```
      MONGO_URL= YOUR_DB_URL
      port = YOUR_PORT
      OFFICIAL_EMAIL= YOUR_EMAL
      OFFICIAL_PASS= YOUR_PASS
      JWT_KEY= YOUR_KEY
      JWT_REFRESHTOKEN_KEY= YOUR_TOKEN
      ```
   6. Start server using `npm start`
5. Open your browser and visit `http://localhost:5173` to view the blog website.

Feel free to explore, create, and share your blog posts with Verve Blog! 📝✨
