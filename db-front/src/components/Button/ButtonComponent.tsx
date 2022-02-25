import './ButtonComponent.css'


type ButtonProps = {
  text: string
  onClick: () => void
}


const ButtonComponent = (props: ButtonProps) => {
  const { text, onClick } = props


  return <>
    <button
      className='button'
      onClick={onClick}
    >{text}</button>
  </>
}


export default ButtonComponent