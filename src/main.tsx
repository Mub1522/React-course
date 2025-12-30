import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Video7 from './Curso React. JSX I. Vídeo 7/Video7.tsx'
import Video8 from './Curso React. JSX II. Manejo de eventos. Vídeo 8/Video8.tsx'
import Video9 from './Curso React. JSX III. useState vs useRef. Vídeo 9/Video9.tsx'
import Video10 from './Curso React. Ejercicio práctico Conversor Euro-Dólar I. Vídeo 10/Video10.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Video7 />
    <hr />
    <Video8 />
    <hr /> */}
    <Video9 />
    <hr />
    <Video10 />
  </StrictMode>,
)
