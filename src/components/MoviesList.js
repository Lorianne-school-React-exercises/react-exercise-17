import React, { useContext } from "react";
import MovieContext from "../contexts/MovieContext";

function MoviesList() {
  const { movies, setMovies } = useContext(MovieContext);

  function deleteMovie(id) {
    const filteredMovies = movies.filter((movie) => movie.movie_id !== id);
    setMovies(filteredMovies);
  }
  function restoreMovie() {
    setMovies([
      {
        movie_id: 1,
        title: "Harry Potter and the Sorcerers Stone",
        release_year: 2001
      },
      {
        movie_id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        release_year: 2002
      },
      {
        movie_id: 3,
        title: "Harry Potter and the Prison of Azkaban",
        release_year: 2004
      }
    ]);
  }

  return (
    <>
      <h1>Movies List</h1>
      {movies.map((movie) => (
        <div className="movie" key={movie.movie_id}>
          ★ {movie.title} &nbsp;
          <button type="button" onClick={() => deleteMovie(movie.movie_id)}>
            x
          </button>
        </div>
      ))}
      <br />
      <button type="button" onClick={() => restoreMovie()}>
        Reset
      </button>
    </>
  );
}

export default MoviesList;
