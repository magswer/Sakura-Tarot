import './index';
import './components/Header'
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';
import { useState } from 'react';



function App() {
  const [threecards,setThreecards] = useState([])

  return (
    <>
    <Header/>
    <Main threecards = {threecards} setThreecards = {setThreecards}/>
    <Button threecards = {threecards}/>
    
    </>

  );
}


export default App;
