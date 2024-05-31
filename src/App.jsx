import Header from './components/ui/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile.jsx'
import Home from './pages/home/Home.jsx'

export default function App() {
  return (
    // Аналог Fragment
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </Router>
  )
}
