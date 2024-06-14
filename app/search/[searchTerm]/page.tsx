import Results from '@/app/components/Results';
import React from 'react'

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
    const data = await res.json();
    const result = data.results;

  return (
    <div>
      <h3 className='mx-auto text-center'>Search Results for <span className='text-xl text-amber-600'>{searchTerm}</span></h3>
      {result &&
        result.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {result && <Results result={result} />}
    </div>
  )
}
