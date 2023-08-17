import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import AppRouter from './router/appRouter';

function App() {
  return (
   <div className='app'>
    <Header/>
    <div className='container'>
      <AppRouter/>
    </div>
    <Footer/>
   </div>
  );
}

export default App;
