import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import Suspense from "./pages/Suspense";
import I18next from "./pages/I18next";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/suspense" element={<Suspense />}></Route>
          <Route path="/i18next" element={<I18next />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
