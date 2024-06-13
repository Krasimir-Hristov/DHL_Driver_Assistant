import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // updated import statement
import Navbar from './components/Navbar';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
      </Router>
    </I18nextProvider>
  );
};

export default App;
