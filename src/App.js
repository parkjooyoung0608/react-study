import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import Suspense from "./pages/Suspense";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/suspense" element={<Suspense />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
