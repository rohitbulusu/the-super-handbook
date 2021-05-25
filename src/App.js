import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import HeroDetail from './pages/HeroDetail';
import Search from './pages/Search';

function App() {
  const [heroDetails, setHeroDetails] = useState([]);

  function updateHeroDetails(details) {
    setHeroDetails(details);
  }

  return (
    <Router>
      <div className="xl:mx-20">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home updateHeroDetails={updateHeroDetails} />} />
          <Route path="/character-detail" render={() => <HeroDetail heroDetails={heroDetails} />} />
          <Route path="/search" render={() => <Search updateHeroDetails={updateHeroDetails} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
