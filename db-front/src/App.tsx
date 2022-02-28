import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


import { SettingsPage, DatabasePage, StatsPage } from './pages'


const App = () => {
  const [pageSize, setPageSize] = useState(1)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SettingsPage pageSize={pageSize} updatePageSize={setPageSize} />} />
        <Route path='/database' element={<DatabasePage pageSize={pageSize} />} />
        <Route path='/stats' element={<StatsPage />} />
      </Routes>
    </Router>
  )
}


export default App