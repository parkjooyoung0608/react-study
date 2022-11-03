import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React Study List</h1>
      <button onClick={() => navigate("/suspense")}>
        suspense 예제 보러가기
      </button>
      <button onClick={() => navigate("/i18next")}>
        i18next 예제 보러가기
      </button>
      <button onClick={() => navigate("/web-storage-object")}>
        WebStorage Object 예제 보러가기
      </button>
    </div>
  );
};

export default Main;
