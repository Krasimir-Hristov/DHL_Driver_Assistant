import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // updated import statement
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <div className='pt-32 md:pt-28'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
