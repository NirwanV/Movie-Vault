import React from "react";

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <div className="movie-Card">
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
                alt={title}
            />

            <div className="mt-4">
                <h3 className="text-white">{title}</h3>

                <div className="content">
                    {/* ⭐ Horizontal Star & Rating with Flex */}
                    <div className="rating flex items-center space-x-2">
                        <img src="star.svg" alt="Star Icon" className="w-5 h-5" />
                        <p className="text-white">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                        <p className="text-white">{original_language.toUpperCase()}</p>
                        <p className="text-white">{release_date ? release_date.split('-')[0] : 'N/A'}</p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
