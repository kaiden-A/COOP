import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Main from './pages/cashiers/MainPage';
import { SalesProvider } from './Context/SalesContext';


function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={
          <SalesProvider>
            <Main/>
          </SalesProvider>
          
        } />
      </Routes>

    </BrowserRouter>

  )
}

export default App
