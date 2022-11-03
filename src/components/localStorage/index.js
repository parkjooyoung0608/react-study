import React from "react";

const LocalStorage = () => {
  localStorage.setItem("test", 1);
  //   alert(localStorage.getItem("test"));

  //   let keys = Object.keys(localStorage);
  //   for (let key of keys) {
  //     alert(`${key}: ${localStorage.getItem(key)}`);
  //   }

  return (
    <div>
      <h1>localStorage</h1>
      <p>getItem : {localStorage.getItem("test")}</p>
    </div>
  );
};

export default LocalStorage;
