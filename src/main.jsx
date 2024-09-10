import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RickAndMortyApp} from './components/RickAndMortyApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles/styles.css'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickAndMortyApp/>
  </StrictMode>,
)