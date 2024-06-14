import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

export default function Cards({ res }) {
    return (
        <div className="cursor-pointer sm:border sm:border-slate-400 sm:m-2 p-2">
            <Link href={`/movie/${res.id}`}>
                <Image src={`https://image.tmdb.org/t/p/w500/${res.backdrop_path || res.poster_path}`} alt='Poster' width={500} height={600} className='sm:rounded-t-lg'></Image>
                <div className="">
                    <p className='line-clamp-2'>{res.overview}</p>
                    <h2 className='text-lg font-bold truncate'>{res.original_title || res.name}</h2>
                    <p className='flex items-center'>
                        {res.release_date || res.first_air_date}
                        <FiThumbsUp className='h-5 mr-1 ml-3' />
                        {res.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
