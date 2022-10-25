import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
//@ts-ignore
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
//@ts-ignore
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
//@ts-ignore
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'


const Navbar = () => {
  const [active, setActive] = useState<boolean>(false)
  const location = useLocation()
  
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className= 'navbarListItems'>
          <li className="navbarListItem">

            <NavLink 
              to='/explore'>  
              <ExploreIcon className='footerIcon' fill={location.state}  />
              <p>Explore</p>
            </NavLink>
          </li>
          <li className="navbarListItem">

            <NavLink 
              to='/offers'>
                <OfferIcon className='footerIcon'  fill={location.state} />
                <p>Offer</p> 
            </NavLink>
          </li>
          <li className="navbarListItem">
            
            <NavLink 
              to='/profile'>
                <PersonOutlineIcon className='footerIcon' fill={location.state} />
                <p>Profile</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
