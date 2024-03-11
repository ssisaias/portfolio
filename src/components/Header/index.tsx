import { HeaderContainer } from './styles'

import Logo from '../../assets/s-logo.png'
import { BookOpenText } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom';


export function Header() {

  return (
    <HeaderContainer>
      <NavLink to={'/'} title='Home'>
        <img src={Logo} alt="home" />
      </NavLink>
      <nav>
        <NavLink to={'https://www.isaiasdevlog.com'} target='_blank' title='back to blog'>
            <BookOpenText size={28}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
