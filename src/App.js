import './App.css';
import Logo from './components/Logo';
import NavLinks from './components/NavLinks';
import { useState } from 'react';

function App() {
  const [mobileTab, setMobileTab] = useState(false);

  const handleClick = () =>{
    if(mobileTab === true){
    setMobileTab(false);
    }
    else{
    setMobileTab(true);
    }
    console.log(mobileTab);
  }

  return (
    <div className="navContainer">
      <Logo handleClick={handleClick} />
      <NavLinks mobileTab={mobileTab}/>
    </div>
  );
}

export default App;
