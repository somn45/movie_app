import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    const {
      data: { movie },
    } = json;
    setMovie(movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
    return () => {};
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          summary={movie.description_intro}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
