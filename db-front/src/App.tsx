import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { SettingsPage, DatabasePage, StatsPage } from './pages';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SettingsPage />
          }
        />
        <Route
          path="/database"
          element={<DatabasePage />}
        />
        <Route
          path="/stats"
          element={<StatsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
