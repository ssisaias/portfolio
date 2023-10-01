import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'

function App() {
  const { currentTheme } = useContext(ThemeContext); // this only works because of the AppThemeWrapper()

  return (
    <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
