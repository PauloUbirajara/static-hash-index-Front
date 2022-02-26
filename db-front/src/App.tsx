import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import SettingsComponent from './components/Settings/SettingsComponent'
import DatabaseComponent from './components/Database/DatabaseComponent'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SettingsComponent />} />
        <Route path='/database/:pageSize' element={<DatabaseComponent />} />
      </Routes>
    </Router>

  )
}


export default App