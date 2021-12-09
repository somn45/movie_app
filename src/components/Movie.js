import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

Movie.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.array.isRequired,
};

function Movie({ id, title, summary, poster, genres }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
