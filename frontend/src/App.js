import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from "./component/Chat";
import Home from "./component/Home";
import Feedback from "./component/Feedback";
import FileUpload from "./component/FileUpload";
import Welcome from "./component/Welcome";

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/fileUpload" element={<FileUpload />} />
          </Routes>
        </div>
      </Router>
  );

}

export default App;