# ReviveScope - Movie Search and Favorites App

## Project Description

ReviveScope is a modern React-based web application that allows users to search for movies, view detailed information, and manage a list of favorite movies. The app integrates with the OMDb API for real-time movie data.

## Features

* Search movies by title.
* View detailed movie information including plot, director, cast, genre, runtime, and IMDb rating.
* Add or remove movies from Favorites.
* Persistent favorites using `localStorage`.
* Pagination to browse multiple pages of search results.
* Clean, responsive UI built with Tailwind CSS.
* Loading and error states with meaningful messages.

## Tech Stack

* React (Functional Components & Hooks)
* React Router DOM for navigation
* Axios for API requests
* Tailwind CSS for styling
* OMDb API for movie data
* LocalStorage for favorites persistence

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/tommyiversonj/alx_fe_captsone_project.git
   cd alx_fe_captsone_project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OMDb API key:

   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```
   http://localhost:5173
   ```

## Known Limitations

* OMDb API free plan may limit the number of requests per day.
* Search suggestions/autocomplete are not yet implemented.
* Filtering by year or genre is not implemented.
* Some movies may not have complete data (e.g., missing posters or ratings).

## Folder Structure

```
src/
  components/
    ErrorMessage.jsx
    Loader.jsx
    MovieCard.jsx
    MovieDetails.jsx
    MovieList.jsx
    SearchBar.jsx
  App.jsx
  main.jsx
```

## Code Comments

* API calls are handled in `App.jsx` using Axios.
* `MovieDetails.jsx` fetches movie details by IMDb ID.
* Favorites functionality is managed with `useState` and `localStorage`.
* Pagination state is maintained in `App.jsx` and passed to the API call.

## Future Enhancements

* Implement search suggestions and autocomplete.
* Add filtering by genre, year, and rating.
* Add watchlist and trending movies.
* Improve responsiveness and mobile layout further.
* Add unit and integration tests.

## License

MIT License
