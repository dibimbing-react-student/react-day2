import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'

function App() {

  const cart = 0

  return (
    <>
      <Header cart={cart}/>
    </>
  );
}

export default App;
