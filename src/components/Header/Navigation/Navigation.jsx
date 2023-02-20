import { NavLink } from "react-router-dom";
import './Navigation.scss'

export const Navigation = () => {

  return (
    <div className="navigation">
      <NavLink className='link navigation_link' to='/'>
        о мероприятии
      </NavLink>
      <NavLink className='link navigation_link' to='/'>
        спикеры
      </NavLink>
    </div>
  )
};

export default Navigation
