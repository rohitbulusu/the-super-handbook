import React from 'react';

function HeroDetail(hero) {
  const details = Object.values(hero);

  return (
    <div className="flex flex-col m-4 md:grid md:grid-cols-3">
      <div className="mx-auto max-w-sm md:max-w-lg md:col-span-1">
        <img className="my-3 rounded-xl" src={details[0].image.original_url} alt="small_image" />
      </div>
      <div className="md:m-6 md:col-span-2">
        <p className="font-bold text-5xl"> {details[0].name}</p>
        <div className="my-5">
          <h3 className="font-bold text-xl">Publisher:</h3>
          <p>{details[0].publisher.name}</p>
        </div>
        <div className="my-5">
          <h3 className="font-bold text-xl">Creators:</h3>
          {details[0].creators.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div className="my-5">
          <h3 className="font-bold text-xl">Gender: </h3>
          {details[0].gender === 1 ? <p>Male</p> : <p>Female</p>}
        </div>
        <div className="my-5">
          <h3 className="font-bold text-xl">Real Name:</h3>
          <p>{details[0].real_name}</p>
        </div>
        <div className="my-5">
          <h3 className="font-bold text-xl">Powers:</h3>
          <div className="flex flex-wrap">
            {details[0].powers.map((item) => (
              <div className="transform mr-1 my-1 px-3 bg-gray-600 rounded-2xl hover:scale-105">
                <p className="text-white" key={item.id}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-5">
          <h3 className="font-bold text-xl">Description:</h3>
          <p>{details[0].deck}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroDetail;
