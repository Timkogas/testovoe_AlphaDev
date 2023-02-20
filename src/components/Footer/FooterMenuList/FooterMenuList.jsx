import { Link } from 'react-router-dom';
import FooterMenuItem from './FooterMenuItem/FooterMenuItem';
import './FooterMenuList.scss'

export const FooterMenuList = ({ items }) => {

  return (
    <div className='footer_menu'>
      {items.map((item, i) => {
        if (item.isLink) {
          return (
            <Link
              key={i}
              to={item.link}
              className='link footer_menu_link'
            >
              {item.text}
            </Link>
          )
        } else {
          return (
            <FooterMenuItem
              key={i}
              text={item.text}
              link={item.link}
            />
          )
        }
      })}
    </div>
  )
};

export default FooterMenuList
