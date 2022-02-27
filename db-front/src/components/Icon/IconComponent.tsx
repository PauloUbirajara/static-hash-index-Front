type IconProps = {
  icon: string
}


enum IconEnum {
  SEARCH = 'search.svg',
  COLLISION = 'collision.svg',
  OVERFLOW = 'overflow.svg',
  OPEN_DATABASE = 'open-database.svg',
  SINGLE_PAGE_SIZE = 'single-page-size.svg'
}


const IMAGE_FOLDER = `${process.env.PUBLIC_URL}/static/svg/`


const IconComponent = (props: IconProps) => {
  const { icon } = props

  return <img src={`${IMAGE_FOLDER}/${icon}`} alt='icon' />
}


export {
  IconComponent,
  IconEnum
}