import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';


const conteiner = document.getElementById('root')

const root = createRoot(conteiner)

root.render(<App />)

