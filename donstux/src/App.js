import React from 'react';
import './App.css';
import { Header, Footer, DogInfoBox, MainDogCard } from './components';
import { Main } from './pages/Main/Main';
import { DogInfoPage } from './pages/DogInfoPage';
import AnimalsList from './components/AnimalsList/AnimalsList.js'
import AnimalsFilter from './components/AnimalsFilter/AnimalsFilter';
import CompanyInfo from './pages/CompanyInfo/CompanyInfo';
import AuthorizationLogIn from './components/Authorization/AuthorizationLogIn';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AllPets } from './pages/AllPets';

import { createPortal } from 'react-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/all' element={<AllPets />} />
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<CompanyInfo />} />
          <Route path='/view/:id' element={<DogInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
