import React from 'react';
import { Route } from 'react-router-dom';

import { MainSideNav } from './components';
import { PostRecipe, Home } from './views';
import './App.css';

function App() {
  return (
    <div id='global-container' className='flex-container'>
      <MainSideNav active='Home' />
      <div id='main-container'>
        <h1>FoodApp</h1>
        <Route exact path="/" component={Home} />
        <Route exact path='/post_recipe' component={PostRecipe} />
      </div>
    </div>
  );
}

export default App;
