import { useState } from 'react'
import './SettingsComponent.css'


type SettingsProps = {
  updatePageSize: (value: number) => void
}


const SettingsComponent = (props: SettingsProps) => {
  const { updatePageSize } = props
  const [pageSize, setPageSize] = useState(0)


  const onClick = () => {
    if (!pageSize || pageSize <= 0) return

    updatePageSize(pageSize)
  }

  const onChange = (el: any) => {
    setPageSize(+el.target.value)
  }


  return <>
    <div className="settings">
      <h1>Digite o tamanho individual da página:</h1>
      <input
        type="number"
        placeholder='Digite um número'
        min='1'
        onChange={onChange}
      />
      <button
        className='primary-button'
        onClick={onClick}
      >Configurar</button>
    </div>
  </>
}


export default SettingsComponent