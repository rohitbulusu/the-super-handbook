import React, { useState } from 'react';
import axios from '../axios';
import SearchItem from '../components/Search/SearchItem';

function Search({ updateHeroDetails }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hero, setHero] = useState('');

  // const [loading, setLoading] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    async function fetchData() {
      const request = await axios.get(
        `characters/?api_key=7799b41b5fb2f9ab99d7692b941959126f9921bc&format=json&limit=30&field_list=name,real_name,image,publisher,id,creators,gender,deck,powers&filter=name:${searchQuery}`
      );
      setHero(request.data.results);
      // setLoading(false);
      return request;
    }
    fetchData();
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <h1 className="m-4 text-2xl">Search:</h1>
      <form className="flex flex-col mx-4 justify-center">
        <input
          className="my-4 m-auto max-w-xl appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          value={searchQuery}
          type="text"
          id="search"
          name="search"
        />
        <input
          onClick={handleSubmit}
          className="border cursor-pointer rounded-md h-10 max-w-xl m-auto w-full py-2 px-3 hover:bg-gray-300"
          type="submit"
        />
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {Object.entries(hero).map((result) => (
          <div key={Object.entries(result)[1][1].id}>
            <SearchItem result={result} updateHeroDetails={updateHeroDetails} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
