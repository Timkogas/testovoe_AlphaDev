
import Navigation from './Navigation/Navigation';
import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';
import './Header.scss'


export const Header = () => {
  return (
    <div className='header_bg'>
      <div className='header container'>
        <Logo />
        <Navigation />
        <Button>Регистрация</Button>
      </div>
    </div>
  )
};

export default Header
