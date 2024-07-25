import { useState } from 'react';
import './App.css';
import { Header, JuegoEspacion } from './components/home';
function App() {

  const [juego, setJuego] = useState(undefined)


  return (
    <div className='max-w-screen-xl mx-auto'>
      <div
        className='my-4'
      >
        <Header setJuego={setJuego} />
        <JuegoEspacion juego={juego} />
      </div>
    </div >
  );
}

export default App;


