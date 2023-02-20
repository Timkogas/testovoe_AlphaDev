import { FooterMenuInfoItems, FooterMenuLinksItems } from '../../constans';
import Logo from '../UI/Logo/Logo';
import './Footer.scss'
import FooterMenuList from './FooterMenuList/FooterMenuList';
import FooterSocialLogoList from './FooterSocialLogoList/FooterSocialLogoList';


export const Footer = () => {
  return (
    <div className='footer_bg'>
      <div className='footer container'>
        <Logo
          className='logo_footer'
        />
        <FooterMenuList
          items={FooterMenuInfoItems}
        />
        <FooterMenuList
          items={FooterMenuLinksItems}
        />
        <FooterSocialLogoList
        />
      </div>
    </div>
  )
};

export default Footer
