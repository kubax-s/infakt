import { FC } from 'react';
import { MainPage, AccountantsPage } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/ksiegowi'} element={<AccountantsPage />} />
    </Routes>
  </Router>
)

export default App;
