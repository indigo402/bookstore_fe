import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManajemenBuku from './components/ManajemenBuku';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>

        <Route path="/" exact element={<Beranda />} />

        <Route path="/manajemen-buku" element={<ManajemenBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
