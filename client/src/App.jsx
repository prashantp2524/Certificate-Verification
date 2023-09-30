// import { useEffect } from "react";

import CertificateVerification from "./components/CertificateVerification";

import Hello from './components/Hello'
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App()
{
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/verify" element={<CertificateVerification />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
