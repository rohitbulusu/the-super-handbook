import React from 'react';
import FeaturedItem from './FeaturedItem';
import requestsHeroes from '../../requests/requestsHeros';

function Featured({ updateHeroDetails }) {
  return (
    <div>
      <h2 className="m-4 text-2xl">Featured:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {Object.keys(requestsHeroes).map((item, index) => (
          <FeaturedItem
            key={requestsHeroes[index]}
            updateHeroDetails={updateHeroDetails}
            url={`/character/4005-${requestsHeroes[item]}/?api_key=7799b41b5fb2f9ab99d7692b941959126f9921bc&format=json&field_list=name,real_name,image,publisher,id,creators,gender,powers,deck`}
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;
