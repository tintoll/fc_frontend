import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <Route path="/" component={Home}  exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>    
  );
}

export default App;
