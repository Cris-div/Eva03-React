import { useEffect ,useState } from "react";
import { getCharacters } from "../api/rickmorty";

function Home (){
    const [characters, setCharacters] = useState ([]);

    useEffect (()=>{
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters (data);
        };
        fetchCharacters();
    }, []);

    return (
        <>
        <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🛸 Rick & Morty Universe</h1>
      <p className="text-gray-600 mb-6">
        Explora personajes, lugares y episodios del universo de Rick & Morty.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((char) => (
          <div key={char.id} className="p-4 border rounded-xl shadow">
            <img src={char.image} alt={char.name} className="rounded-lg" />
            <h2 className="mt-2 font-semibold">{char.name}</h2>
          </div>
        ))}
      </div>
    </div>
        </>
    );
}

export default Home;