import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

function FeaturedItem({ url, updateHeroDetails }) {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState(['']);

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setHero(request.data.results);
      setLoading(false);
      return request;
    }

    fetchData();
  }, [url]);

  function handleClick(e) {
    e.preventDefault();
    updateHeroDetails(hero);
    history.push('/character-detail');
  }

  return (
    <div>
      {loading === true ? (
        <p className="font-bold">Loading...</p>
      ) : (
        <div onClick={handleClick} aria-hidden="true" className="flex flex-col m-4 cursor-pointer">
          <img
            className="transform-gpu h-48 sm:h-80 w-50 object-cover object-top hover:scale-105 duration-75  my-3 rounded-xl"
            src={hero.image.small_url}
            alt="small_image"
          />
          <div>
            <p className="font-bold text-lg sm:text-2xl tracking-wide"> {hero.name}</p>
            <p>{hero.publisher.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedItem;
