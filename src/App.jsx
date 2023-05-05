import { useState } from 'react';
import { Home, AddNote, EditNote, Notes, SingleNote } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Notes />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
            <Route path="/note/:id" element={<SingleNote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
