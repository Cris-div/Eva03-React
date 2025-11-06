import { useEffect ,useState } from "react";
import { getLocations } from "../api/rickmorty";

function Entities (){
    const [locations, setLocations] = useState ([]);

    useEffect (()=>{
        const fetchLocations = async () => {
            const data = await getLocations();
            setLocations (data);
        };
        fetchLocations();
    }, []);
    return (
        <>
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-6">🌍 Locations</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {locations.map((loc) => (
                    <div key={loc.id} className="p-4 border rounded-lg shadow">
                        <h2 className="font-semibold">{loc.name}</h2>
                        <p>Tipo: {loc.type}</p>
                        <p>Dimensión: {loc.dimension}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
        );
}
export default Entities;