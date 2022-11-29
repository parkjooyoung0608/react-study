import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Suspense from "./pages/Suspense";
import I18next from "./pages/I18next";
import WebStorageObject from "./pages/WebStorageObject";
import ReactDatePicker from "./pages/ReactDatePicker";
import SampleKeyboard from "./pages/Keyboard";
import Dnd from "./pages/Dnd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/suspense" element={<Suspense />}></Route>
        <Route path="/i18next" element={<I18next />}></Route>
        <Route
          path="/web-storage-object"
          element={<WebStorageObject />}
        ></Route>
        <Route path="/date-picker" element={<ReactDatePicker />}></Route>
        <Route path="/keyboard" element={<SampleKeyboard />}></Route>
        <Route path="/drag" element={<Dnd />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
