import React from "react"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import FormPage from './pages/FormPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analysis" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
