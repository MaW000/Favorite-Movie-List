import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Body from './routes/Body';
import About from './routes/About'
import SavedMovies from './routes/SavedMovies';
import { AppContextProvider } from "./AppContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Body />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/saved' element={<SavedMovies />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);


