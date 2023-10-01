import App from './App'
import { ThemeContextProvider } from './contexts/ThemeContext'

function AppThemeWrapper() { // This is so we can use the context to retrieve the Theme in App()
  
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  )
}

export default AppThemeWrapper
