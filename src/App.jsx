import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [data, setData] = useState([]);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);
  console.log(data);

  return (
    <div className="text-4xl min-h-screen  bg-yellow-400 text-black">
      <div className="w-[80%] mx-auto">
        <div className="p-5 ">GEEKS</div>
        <div>Pokemons: {data.length}</div>
        <div className="  mt-4 p-2 grid grid-cols-3 gap-4 bg-white bg-opacity-50">
          {data.map(({ name, url }, idx) => {
            return (
              <span key={idx}>
                <PokemonCard name={name} url={url} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
