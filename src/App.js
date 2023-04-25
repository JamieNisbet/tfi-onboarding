import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./templates/Header";
import Form from "./pages/Form";


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
    <Routes>
      <Route path="/" element={<Form />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
