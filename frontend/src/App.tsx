import './App.css'
import { Routes, Route } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import Counter from './components/CountDown/Countdown';

function App() {

  return (
    <>
    <main>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/count" element={<Counter duration={60} />} />
    </Routes>
    </main>
    </>
  )
}

export default App
