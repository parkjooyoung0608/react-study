import React from "react";

const SeesionStorage = () => {
  sessionStorage.setItem("test", 1);
  alert(sessionStorage.getItem("test"));

  return (
    <div>
      <h1>SeesionStorage</h1>
      <p>getItem : {sessionStorage.getItem("test")}</p>
    </div>
  );
};

export default SeesionStorage;
