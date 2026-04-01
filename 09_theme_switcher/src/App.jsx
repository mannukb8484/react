import './index.css'
import { useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeButton'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  //{ darkTheme, lightTheme, themeMode } although accepted from the other file we define 
  // their functionality here
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  // acual change in the theme: in js, we do when themeMode var change hence has dependency
  // so use the useEffect
  useEffect(() => {
    const doc = document.querySelector('html')
    doc.classList.remove("light", "dark")
    doc.classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
