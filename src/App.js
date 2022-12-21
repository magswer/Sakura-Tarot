import './App.css';
import './components/Header'
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';
import { Link } from 'react-router-dom';
import Lettermold from './components/Lettermold';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Link to='/Secondpage'><Button /></Link>
    <Lettermold text= "time"/>
    <Lettermold text= "card-title"/>
    <Lettermold text= "card-description"/>
    </>

  );
}


export default App;
