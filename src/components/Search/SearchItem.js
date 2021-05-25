import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

function SearchItem({ result, updateHeroDetails }) {
  const results = Object.entries(result)[1][1];
  const history = useHistory();

  //   console.log(updateHeroDetails);

  function handleClick(e) {
    e.preventDefault();
    // console.log(results);

    async function fetchData() {
      const request = await axios.get(
        `/character/4005-${results.id}/?api_key=7799b41b5fb2f9ab99d7692b941959126f9921bc&format=json&field_list=name,real_name,image,publisher,id,creators,gender,powers,deck`
      );
      // setLoading(false);
      return request;
    }
    fetchData().then((request) => {
      updateHeroDetails(request.data.results);
      history.push('/character-detail');
    });
  }

  return (
    <div>
      <div onClick={handleClick} aria-hidden="true" className="flex flex-col m-4 cursor-pointer">
        <img
          className="transform-gpu h-80 w-50 object-cover object-top hover:scale-105 duration-75  my-3 rounded-xl"
          src={results.image.small_url}
          alt="small_image"
        />
        <div>
          <p className="font-bold"> {results.name}</p>
          {results.publisher != null ? <p>{results.publisher.name}</p> : <p>None</p>}
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
