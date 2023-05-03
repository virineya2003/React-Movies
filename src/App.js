import './css/index.css';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Main } from './layout/main';
import React from 'react';
// Разметка HTML

function App() {
  return (
    <React.Fragment>
      < Header />
      < Main />
      < Footer />
    </React.Fragment>
  );
}

export default App;
