import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';




function App() {

  return (
   <Routes>
<Route path='/'element={<RoomsTablePage />} />
<Route path='/login'element={<Autorization />} />
<Route path='/rooms/:roomId'element={<SingleRoomPage/>} />

   </Routes>
  );
}

export default App;
