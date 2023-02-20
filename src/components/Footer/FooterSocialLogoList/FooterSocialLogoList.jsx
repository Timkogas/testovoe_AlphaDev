

import LogoSocial from '../../UI/LogoSocial/LogoSocial';
import './FooterSocialLogoList.scss'
import vk from '../../../assets/vk-logo.svg'
import fc from '../../../assets/fc-logo.svg'
import inst from '../../../assets/inst-logo.svg'
import tg from '../../../assets/tg-logo.svg'

const socialLogoItems = [vk, fc, inst, tg]

export const FooterSocialLogoList = () => {

  return (
    <div className='footer_logo_list'>
      {socialLogoItems.map((item, i) => {
          return (
            <LogoSocial
              key={i}
              src={item}
            />

          )
      })}
    </div>
  )
};

export default FooterSocialLogoList
