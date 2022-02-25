import { useState } from 'react'
import SettingsComponent from './components/Settings/SettingsComponent'


const App = () => {
  const [pageSize, setPageSize] = useState(0)


  const updatePageSize = (value: number) => {
    setPageSize(value)
    console.log(pageSize)
  }


  return <>
    <div>
      <SettingsComponent updatePageSize={updatePageSize} />
    </div>
  </>
}


export default App