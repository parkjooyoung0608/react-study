import React from "react";
import LocalStorage from "../components/localStorage";
import SessStorage from "../components/sessionStorage";

const WebStorageObject = () => {
  return (
    <div>
      <LocalStorage />
      <SessStorage />
    </div>
  );
};

export default WebStorageObject;
