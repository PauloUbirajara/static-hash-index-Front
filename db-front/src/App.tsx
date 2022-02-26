import { useState } from 'react'
import SettingsComponent from './components/Settings/SettingsComponent'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  const [pageSize, setPageSize] = useState(0)

  const updatePageSize = (value: number) => {
    setPageSize(value)

    /*
     TODO
        - Enviar request para backend informando tamanho individual de página
        - Mostrar dados retornados em request de backend
        - Definir endpoints para mostrar outras telas de visualização/estatísticas
     */
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SettingsComponent updatePageSize={updatePageSize} />} />
      </Routes>
    </Router>
    
  )
}

export default App