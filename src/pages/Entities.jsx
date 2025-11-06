import { useEffect, useState } from "react";
import { getLocations } from "../api/rickmorty";

function Entities() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const data = await getLocations(page);
        setLocations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar ubicaciones:", error);
        setLoading(false);
      }
    };
    fetchLocations();
  }, [page]);

  return (
    <section className="py-4">
      <div className="container text-center">
        <h1 className="fw-bold mb-3">🌍 Locations</h1>
        <p className="text-muted mb-4">
          Lugares del universo de Rick & Morty
        </p>

        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {locations.map((loc) => (
              <div key={loc.id} className="col">
                <div className="card shadow-sm h-100 border-success">
                  <div className="card-body">
                    <h5 className="card-title">{loc.name}</h5>
                    <p className="card-text">
                      <strong>Tipo:</strong> {loc.type} <br />
                      <strong>Dimensión:</strong> {loc.dimension}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

export default Entities;
