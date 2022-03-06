const IMAGE_FOLDER = `../../static/svg/`;

type IconProps = {
  icon: IconEnum;
};

const IconComponent = (props: IconProps) => {
  const { icon } = props;

  return <img src={`${IMAGE_FOLDER}/${icon}`} alt="icon" />;
};

enum IconEnum {
  SEARCH = 'search.svg',
  COLLISION = 'collision.svg',
  OVERFLOW = 'overflow.svg',
  OPEN_DATABASE = 'open-database.svg',
  SINGLE_PAGE_SIZE = 'single-page-size.svg',
}

export { IconComponent, IconEnum };
