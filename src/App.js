import './App.css';
import './components/Header'
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Link to='/Secondpage'><Button /></Link>
    
    </>

  );
}


export default App;
