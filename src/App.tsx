import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import "./style/_main.scss";

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
