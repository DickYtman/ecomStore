import { useNavigate, useLocation } from 'react-router-dom'
//@ts-ignore
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
//@ts-ignore
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
//@ts-ignore
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'


const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  const pathMatchRoute = (path:string) => {
    if(path === location.pathname) {
      return true
    }
  }
  
  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className= 'navbarListItems'>
          <li className="navbarListItem" onClick={() => navigate('/')}>
            
              <ExploreIcon 
              fill={pathMatchRoute('/') ? '#3f3f3f' : '#8f8f8f'}  />
              <p 
              className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'} 
              >Explore</p>
            
          </li>
          <li className="navbarListItem" onClick={() => navigate('/offers')}>
     
              <OfferIcon  
              fill={pathMatchRoute('/offers') ? '#3f3f3f' : '#8f8f8f'}  />
              <p
              className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}
              >Offer</p> 
          </li>
          <li className="navbarListItem" onClick={() => navigate('/profile')}>
            
              <PersonOutlineIcon 
              fill={pathMatchRoute('/profile') ? '#3f3f3f' : '#8f8f8f'}  />
              <p
              className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}
              >Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
