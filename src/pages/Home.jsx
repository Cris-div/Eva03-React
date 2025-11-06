import { useEffect, useState } from "react";
import { getCharacters } from "../api/rickmorty";

const LIMIT_PER_PAGE = 20;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters(page);
        setCharacters(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [page]);

  return (
    <section className="py-4">
      <div className="container text-center">
        <h1 className="fw-bold mb-3">
          🛸 Rick & Morty Universe
        </h1>
        <p className="text-muted mb-4">
          Explora personajes del universo de Rick & Morty.
        </p>

        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {characters.map((char) => (
              <div key={char.id} className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{char.name}</h5>
                    <p className="card-text text-secondary mb-0">
                      {char.status} - {char.species}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINACIÓN */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
            </li>

            <li className="page-item">
              <button className="page-link active">{page}</button>
            </li>

            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Home;
