import axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [img, setImg] = useState("");
  const fetchPokemonImg = async (url) => {
    try {
      const response = await axios.get(url);
      const imageUrl = response.data.sprites.front_default;
      setImg(imageUrl);
    } catch (error) {
      console.error( error);
    }
  };
  useEffect(() => {
    fetchPokemonImg(url);
  }, [url]);

  return (
    <div className="bg-blue-200 shadow-lg rounded-2xl p-4 hover:scale-105">
      <div className="flex flex-row justify-between">
        <img src={img} alt={name} />
      </div>
      <p className="capitalize mt-2 text-lg font-semibold text-gray-700">
        {name}
      </p>
    </div>
  );
};

export default PokemonCard;
