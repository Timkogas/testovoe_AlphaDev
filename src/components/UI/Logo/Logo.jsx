import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

import './Logo.scss'


export const Logo = ({className}) => {

  return (
    <div className={`logo ${className}`}>
      <Link to='/' className='link logo'>
        <img src={logo} alt='logo' />
        <div className='logo_text'>
          <span className='logo_text_first'>Security</span>
          <span className='logo_text_second'>Forum</span>
        </div>
      </Link>
    </div>
  )
};

export default Logo
