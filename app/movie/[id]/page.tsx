import Image from 'next/image';
import React from 'react'

export default async function MoviePage({ params } : {params: any}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}&language=en-US`);
    const movie = await res.json();
    console.log(movie);

    return (
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
                <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`} alt='Poster' width={500} height={600} className='rounded-t-lg' style={{ maxWidth: '100%', height: '100%' }}></Image>
                <div className='p-2'>
                    <h2 className='text-lg mb-3 font-bold'>
                        {movie.title || movie.name}
                    </h2>
                    <p className='text-lg mb-3'>{movie.overview}</p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Date Released:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating:</span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>
        </div>
    )
}
