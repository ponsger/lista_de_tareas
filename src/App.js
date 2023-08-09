import { Fragment, createContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PhraseOfDay from './components/PhraseOfDay'
import ListaTareas from './components/ListaTareas';
import CreaTarea from './components/CreaTarea'
import httpService from './services/httpService'


export const DataStoraged = createContext();

function App() {

  const [createSubject, setNewSubject] = useState(false);
  const [changeData, setChangeData] = useState();

  useEffect(() => {
    setChangeData(httpService.getFromLocalStorage())
  }, [])

  return (
    <Fragment>
      <Navbar newTask={setNewSubject} />
      <PhraseOfDay /> 
      <DataStoraged.Provider value={{changeData,setChangeData}}>
        <div className='app-container'>
          <ListaTareas data={changeData} />
          {createSubject ? <CreaTarea subject={setNewSubject} /> : <Fragment />}
        </div>
      </DataStoraged.Provider>
    </Fragment>
  );
}

export default App;
