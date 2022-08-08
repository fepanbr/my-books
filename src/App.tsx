import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/book/:id" element={<Detail />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    
  )
}

export default App;
