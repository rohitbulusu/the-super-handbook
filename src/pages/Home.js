import React from 'react';

import Featured from '../components/Featured/Featured';

function Home({ updateHeroDetails }) {
  return (
    <div>
      <Featured updateHeroDetails={updateHeroDetails} />
    </div>
  );
}

export default Home;
