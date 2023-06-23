import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PhraseOfDay from './components/PhraseOfDay'
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <PhraseOfDay /> */}
      <ListaTareas />
    </Fragment>
  );
}

export default App;
