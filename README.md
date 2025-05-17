# 🧠 Science News Summarizer

A modern, AI-powered web application built with **React + TypeScript** that fetches the latest science, tech, and space news articles — and lets users summarize, annotate, and export them!

> ✨ Designed with a sleek dark tech theme and deployable for free on [Vercel](https://vercel.com).

---

## 🚀 Features

- 🔍 **Live Science, Tech, and Space News** from the Spaceflight News API.
- 🤖 **AI Summarization** using Hugging Face's Transformers API.
- 📝 **Save Summaries** with custom titles, personal notes, and article links.
- 📄 **Saved Summaries Table** with CSV or JSON export options.
- 🌙 **Dark Techy UI** for a futuristic, sleek look.
- 🌐 **Multi-page Navigation** using React Router.
- ♻️ **Local Storage Persistence** – saved summaries are preserved across sessions.
- 💨 *(Coming soon)* Infinite scroll and animated page transitions.

---

## 🧰 Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Custom CSS with global dark theme
- **Routing**: [React Router](https://reactrouter.com/)
- **Animations** (upcoming): [Framer Motion](https://www.framer.com/motion/)
- **AI Summarization**: [Hugging Face Inference API](https://huggingface.co/inference-api)
- **News API**: [Spaceflight News API](https://api.spaceflightnewsapi.net/)

---

## 📁 Project Structure

## src/
### ├── components/ # Reusable UI components (ArticleCard, SavedTable, etc.)
### ├── hooks/ # Custom hooks (news fetching, localStorage, etc.)
### ├── pages/ # React Router pages (Home, Tech, Space, Playground, Saved)
### ├── types/ # TypeScript types/interfaces
### ├── utils/ # Utility functions (e.g., summarizeText)
### ├── App.tsx # Root app with routes
### ├── index.css # Global styles (dark tech theme)

---

## 🧪 Setup & Running Locally

1. **Clone this repo**:

   ```bash
   git clone https://github.com/your-username/science-news-summarizer.git
   cd science-news-summarizer
Install dependencies:


npm install

### Add Hugging Face API key:

Create a .env file at the root and add:

VITE_HUGGINGFACE_API_KEY=your_token_here
You can get a free token at https://huggingface.co/settings/tokens

## 📤 Deployment
Deploy this app for free using Vercel:

Push to GitHub

Import the repo in Vercel

Add your Hugging Face API key as an environment variable

Done!

## 🛠 Future Plans
🌐 Convert to Next.js for API routes and authentication

📦 Add real-time database storage (Firebase, Supabase, or SQLite)

🎞️ Framer Motion transitions

🔄 Infinite scroll pagination

🔒 Optional user login to persist saved summaries

📜 License
This project is licensed under the MIT License.

## 🙌 Acknowledgments
Hugging Face

Spaceflight News API

React

