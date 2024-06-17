"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs';
import { FiThumbsUp, FiBookmark } from 'react-icons/fi'

interface CardsProps {
    res: {
        id: string;
        backdrop_path?: string;
        poster_path?: string;
        overview: string;
        original_title?: string;
        name?: string;
        release_date?: string;
        first_air_date?: string;
        vote_count: number;
    };
}

export default function Cards({ res }: CardsProps) {
    const { data: session } = useSession();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = () => {
        if (!session) {
            alert("Please SignUp to Bookmark Movies")
            return;
        }
        setIsBookmarked(!isBookmarked);
    };



    return (
        <div className="cursor-pointer sm:border sm:border-slate-400 sm:m-2 p-2">
            <Link href={`/movie/${res.id}`}>
                <Image src={`https://image.tmdb.org/t/p/w500/${res.backdrop_path || res.poster_path}`} alt='Poster' width={500} height={600} className='sm:rounded-t-lg' />
            </Link>
            <div className="">
                <p className='line-clamp-2'>{res.overview}</p>
                <h2 className='text-lg font-bold truncate'>{res.original_title || res.name}</h2>
                <p className='flex items-center'>
                    {res.release_date || res.first_air_date}
                    <FiThumbsUp className='h-5 mr-1 ml-3' />
                    {res.vote_count}
                </p>
                <button onClick={handleBookmark} className="flex items-center mt-2">
                    {isBookmarked ? <BsFillBookmarkFill className='h-5 w-5 text-blue-500' /> : <FiBookmark className='h-5 w-5' />}
                </button>
            </div>
        </div>
    );
}
