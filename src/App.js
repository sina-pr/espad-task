import { useEffect } from 'react';
import './App.css';
import useHttpRequest from './hooks/useHttpRequest';
import { CUSTOMERS_LIST } from './configs/constantApi';
import ButtonWidget from './uiKits/button/ButtonWidget';
import Router from './router/Router';

function App() {
  return <Router />;
}

export default App;
