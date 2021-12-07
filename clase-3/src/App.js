import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
/**
 * Formas de meter estilos
 * Inline <h1 style={styles}>ROJO</h1>
        <h1 style={{ color: "blue"}}>AZUL</h1>
   
   Desde archivo CSS <h1 className="verde">VERDE</h1>
 */

  const styles = {
    color: "red"
  }
  return (
    <React.Fragment >
        <h1 style={styles}>ROJO</h1>
        <h1 style={{ color: "blue"}}>AZUL</h1>
        <h1 className="verde">VERDE</h1>
    </React.Fragment>
  );
}

export default App;
