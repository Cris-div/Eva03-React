import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Entities from './pages/Entities.jsx'

function App() {
  return (
    <>
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/entities">Entidades</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
