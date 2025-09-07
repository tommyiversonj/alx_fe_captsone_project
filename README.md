# ReviveScope 🎬

A modern movie discovery app built with React. Search for movies, view details, and enjoy a clean, responsive interface.

## 🚀 Demo

![ReviveScope Demo](demo-screenshot.png)  
*Search for movies and view details instantly!*

---

## 📝 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Known Issues & Limitations](#known-issues--limitations)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🔎 **Movie Search:** Search movies by title using the OMDb API.
- 📋 **Movie List:** Scroll through search results in a responsive grid.
- 🎥 **Movie Details:** Click a movie to see full details, including poster, release date, genres, and rating.
- 🛡 **Error & Loading States:** Friendly messages for errors and no results, plus loading spinners.
- 📱 **Responsive Design:** Works great on desktop and mobile.
- 🎨 **Accessible UI:** Keyboard navigation and ARIA attributes for better accessibility.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **API:** [OMDb API](https://www.omdbapi.com/)
- **Tooling:** Vite, ESLint, Prettier

---

## 📦 Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/tommyiversonj/alx_fe_captsone_project.git
   cd alx_fe_captsone_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add OMDb API key:**
   - Rename `.env.example` to `.env`
   - Add your OMDb API key:
     ```
     VITE_OMDB_API_KEY=your_api_key_here
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🧑‍💻 Usage

- Enter a movie title in the search bar and hit enter.
- Browse the results and click any movie card to view more details.
- Use the back or close button to return to the results.

---

## 📁 Project Structure

```
src/
  components/
    ErrorMessage.jsx
    Footer.jsx
    Loader.jsx
    MovieCard.jsx
    MovieDetails.jsx
    MovieList.jsx
    SearchBar.jsx
  App.jsx
  main.jsx
```

---

## ⚠️ Known Issues & Limitations

- Requires a valid OMDb API key (free tier has request limits).
- Only supports searching by title (genre/year search is not implemented).
- "Favorites" and "pagination" features planned but not implemented.

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss your idea.

---

## 📄 License

This project is licensed under the MIT License.

---

```
