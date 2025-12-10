import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Video7 from './Curso React. JSX I. Vídeo 7/Video7.tsx'
import Video8 from './Curso React. JSX II. Manejo de eventos. Vídeo 8/Video8.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Video7 />
    <hr />
    <Video8 />
  </StrictMode>,
)
