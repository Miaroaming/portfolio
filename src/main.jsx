import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProjectsContextProvider } from './context/ProjectContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectsContextProvider>
    <App />
    </ProjectsContextProvider>
  </StrictMode>,
)
