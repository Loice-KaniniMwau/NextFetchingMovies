import exp from "constants";

export const getMovies =async() =>{
    try{
    const response = await fetch (`/api/get-movies`,{
        method:'GET',
    })
    const result = await response.json();
    return result;
    }
    catch(error){
        return error;
    }
    }
export const getGenres = async() =>{
    try{
        const response = await fetch (`/api/get-genres`,{
            method:'GET',
        })
        const result = await response.json();
        return result;
    }
    catch(error){
        return error;
    }
}


// utilities.js (or utilities.ts if using TypeScript)
export const searchMovies = async (query:string) => {
    try {
      if (!process.env.MOVIE_BASE_URL || !process.env.MOVIE_ACCESS_TOKEN) {
        // Handle missing environment variables here
        console.error("Movie base URL or access token not found");
        return null;
      }
  
      const response = await fetch(
        `${process.env.MOVIE_BASE_URL}/3/search/movie?query=${query}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`
          }
        }
      );
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return null; // Handle the error gracefully
    }
  };
  
  

export async function getMovieDetails(movieId:number) {
    const url=`/api/getMovieDetails/${movieId}`
    try{    
        const response=await fetch(url)
        if(!response.ok){
            return `movie with id ${movieId} not found`
        }
        const result=await response.json()
        return result;
    }
    catch(error){
        return error
    }
}

  