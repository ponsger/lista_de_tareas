import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PhraseOfDay from './components/PhraseOfDay'
import ListaTareas from './components/ListaTareas';
import CreaTarea from './components/CreaTarea'
import httpService from './services/httpService'


function App() {

  const [createSubject,setNewSubject]= useState(false);
  const [changeData, setChangeData] = useState();
  const [reloadData,setReloadData] = useState(false)


  useEffect(()=>{
    setChangeData(httpService.getFromLocalStorage())
  },[reloadData])

  return (
    <Fragment>
      <Navbar newTask={setNewSubject} />
      <div className='app-container'>
        <ListaTareas data={changeData} /> 
        {createSubject ? <CreaTarea addedTask={setReloadData} subject={setNewSubject} /> : <Fragment />}
      </div>
    </Fragment>
  );
}

export default App;
