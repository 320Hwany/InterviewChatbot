import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from "./component/Chat";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </div>
      </Router>
  );

}

export default App;