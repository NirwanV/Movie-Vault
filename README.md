# 🎬 MovieVault

MovieVault is a sleek, responsive movie search and discovery web application built with React. It allows users to search for movies, view ratings, posters, and language information — all powered by The Movie Database (TMDB) API. The application also tracks and updates search counts using Appwrite as the backend database.

---

## 🚀 Features

- 🔍 **Movie Search** — Instantly search for movies using keywords.
- 📊 **Rating Display** — Shows movie ratings with star icons.
- 🖼️ **Poster Viewer** — Displays movie posters; a fallback image is used when unavailable.
- 🌐 **Language Indicator** — Shows the original language of each movie.
- 📅 **Release Info** — Shows release date of the movie.
- 📈 **Search Analytics** — Tracks how many times a movie has been searched using Appwrite.
- 💻 **Responsive UI** — Works seamlessly on desktop and mobile.

---

## 🛠️ Tech Stack

### 🧑‍💻 Frontend
- **React.js** — Modern JavaScript library for building user interfaces.
- **Tailwind CSS** — Utility-first CSS framework for styling.
- **Vite** — Fast build tool for modern web development.
- **TMDB API** — Used to fetch movie data, ratings, posters, etc.

### ☁️ Backend
- **Appwrite** — Open-source backend server for authentication and database:
  - Database: Used to store search history and count.
  - Document API: Create and update movie search records.

---

## ⚙️ Environment Variables

Create a `.env` file at the root of your project and add the following:

```env
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
