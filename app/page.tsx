import Results from "./components/Results";
import SignUp from "./components/SignUp";
const API_KEY = process.env.API_KEY;

async function getData(searchParams: { genre: string; }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTrending' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`, {next:{revalidate: 10000000}})  
  const data = await res.json();
  if(!res.ok){
    throw new Error('Something went wrong');
  }
  const result = data.results;
  console.log(result);
  return result;
}

export default async function Home({ searchParams }: { searchParams: { genre: string } }) {
 
  const data = await getData(searchParams);
  
  return (
    <div className='max-w-6xl mx-auto p-3 space-y-4'>
      <h1 className='text-2xl text-amber-500 font-medium'>Home</h1>
      <SignUp />
      <div>
        <Results result={data} />
      </div>
    </div>
  );
}
