import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      App
    </main>
  );
}


