import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/suspense")}>
        suspense 예제 보러가기
      </button>
    </div>
  );
};

export default Main;
