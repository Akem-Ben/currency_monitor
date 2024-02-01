import './App.css'
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';

function App() {

  return (
    <>
    <main>
    <Routes>
    <Route path="/admin_single/:eventId" element={<LandingPage />} />
    </Routes>
    </main>
    </>
  )
}

export default App
