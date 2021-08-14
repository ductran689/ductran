import React from 'react';
import Hambuger from './components/Hambuger';
import Intro from './components/Intro';
import Main from './components/Main';
import Menu from './components/Menu';
import useMedia from './hooks/useMedia';
import './Style/App.scss';
import './Style/Components.scss';
import './Style/Layout.scss';
import './Style/Mixins.scss';
import './Style/Variables.scss';




function App() {

  const {xs} = useMedia()
  return (
    <div className="App">
      <Menu/>
      <Main />
      <Intro />
    {xs && <Hambuger/>}


    </div>
  );
}

export default App;
