import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import SettingsPage from './pages/SettingsPage'
import DatabasePage from './pages/DatabasePage'
import StatsPage from './pages/StatsPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SettingsPage />} />
        <Route path='/database/:pageSize' element={<DatabasePage />} />
        <Route path='/stats' element={<StatsPage />} />
      </Routes>
    </Router>

  )
}


export default App