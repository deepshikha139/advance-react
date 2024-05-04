import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Article} from './pages/Article'

function App() {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/article'>Article</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={Home}/>
      <Route path='/about' element={About}/>
      <Route path='/article' element={Article}/>
    </Routes>
    </>
  );
}

export default App;

// import React from 'react';
// import {Home} from "./pages/Home";

// function App() {
//   return (
//     <Home />
//   );
// }

// export default App;
