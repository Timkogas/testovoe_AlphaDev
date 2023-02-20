import { Link } from 'react-router-dom';
import'./FooterMenuItem.scss'


export const FooterMenuItem = ({text, link}) => {

  return (
    <Link to={link} className='link footer_menu_info_link'>{text}</Link>
  )
};

export default FooterMenuItem
