import { useEffect } from 'react'
import AppRoutes from './routes'
import './App.css'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return <AppRoutes />
}