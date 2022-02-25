import { useState } from 'react'

import SettingsComponent from './components/Settings/SettingsComponent'


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


  return <>
    <SettingsComponent updatePageSize={updatePageSize} />
  </>
}


export default App