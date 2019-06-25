import React from 'react';
// import api from './services/api';
import Routes from './routes';

import './styles.css';

import Header from './components/Header'
// import Main from './pages/main';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Patrick</h1>
//     </div>
//   );
// }

const App = () => (
  <div className='App'>
    <Header />
    <Routes />
  </div>
);

export default App;
