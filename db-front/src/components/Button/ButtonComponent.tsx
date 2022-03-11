import { Link } from 'react-router-dom';

import { IconComponent } from '../Icon/IconComponent';
import { Button, ButtonProps } from './Button';

const ButtonComponent = (props: ButtonProps) => {
  const { text, onClick, to, icon } = props;

  if (to) {
    return (
      <>
        <Link to={to} onClick={onClick}>
          <Button>
            {icon && <IconComponent icon={icon} />}
            <span>{text}</span>
          </Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <Button onClick={onClick}>
        {icon && <IconComponent icon={icon} />}
        <span>{text}</span>
      </Button>
    </>
  );
};

export { ButtonComponent };
