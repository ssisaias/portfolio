import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, ThemeToggleFooter } from './styles'
import Switch from '../../components/ui/SwitchInput'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export function DefaultLayout() {
  const {changeTheme} = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState(true);

  function handleThemeSwitch() {
    setSwitchState(!switchState)
    if(switchState) {
      changeTheme('default')
    } else {
      changeTheme('dark')
    }
  }

  return (
    <LayoutContainer>
      <Header></Header>
      {/* 👇 componente que usamos do react-router-dom quando precisamos criar layouts em que esse componente será substituído pelo conteúdo da rota */}
      <Outlet />{' '}
      <ThemeToggleFooter>
        <Switch id='theme-switch'
          toggled={switchState}
          onChange={() => {handleThemeSwitch()}} />
      </ThemeToggleFooter>
    </LayoutContainer>
  )
}
