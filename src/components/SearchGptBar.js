import React from 'react'
import openai from '../utils/GptConnection';
import { API_OPTIONS } from '../utils/constants';
import { useState } from 'react';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
const SearchGptBar = () => {
  const [searchTextValue, setSearchTextValue] = useState("");
  const [moviesResults,setMoviesResults] = useState(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const GptChatHandler = async () => {
    console.log(searchTextValue);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchTextValue +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //  gives movie data
    // console.log(chatCompletion.choices);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const moviesData = chatCompletion?.choices[0]?.message.content.split(",");

    // const moviesData =  ["Jawan","Dunki","Tiger 3", "3 idiots", "mission impossible part 1",]

    // For each movie I will search TMDB API

    const promiseArray = moviesData.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    //  console.log(tmdbResults);

    const arryOfMoviesObject = tmdbResults.map((data, index) => {
      return tmdbResults[index];
    });
    console.log(arryOfMoviesObject);

    setMoviesResults(tmdbResults);

    setSearchTextValue("");
  };

  return (
    <>
      <div className="w-full p-5 flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-2 w-[70vw]"
        >
          <input
            onChange={(e) => setSearchTextValue(e.target.value)}
            type="text"
            value={searchTextValue}
            className="bg-slate-600 px-10 py-7 rounded-l-md w-3/4 placeholder:text-slate-200 text-2xl"
            placeholder="What would you like to watch today ?"
          ></input>
          <button className='bg-purple-600 text-white px-7 py-7  text-2xl rounded-r-md' onClick={GptChatHandler}>Submit</button>
        </form>
      </div>
      <div className="mb-20">
        {moviesResults &&
          // ! first designe --
          moviesResults?.map((data,index) => (
            (data.length > 4) ? <MovieList key={index} title={data[0].title} movies={data} /> : null))
          // ! second designe --
          // moviesResults.map((data) => (
          //   <div>
          //     <p className="w-40 whitespace-nowrap overflow-hidden text-ellipsis">
          //       {data[0]?.title}
          //     </p>
          //     <MovieCard posterPath={data[0]?.poster_path} />
          //   </div>
          // ))
        }
      </div>
    </>
  );
}

export default SearchGptBar