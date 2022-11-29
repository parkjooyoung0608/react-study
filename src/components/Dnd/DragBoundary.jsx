import React from "react";

const DragBoundary = () => {
  const mouseMoveHandler = (e) => {
    console.log(`mouse move x:${e.screenX} y:${e.screenY}`);
  };
  const mouseUpHandler = (e) => {
    console.warn(`>>>> mouse up x:${e.screenX} y:${e.screenY}`);
    document.removeEventListener("mousemove", mouseMoveHandler);
  };

  return (
    <>
      <div
        className="dragBox"
        onMouseDown={() => {
          document.addEventListener("mousemove", mouseMoveHandler);
          document.addEventListener("mouseup", mouseUpHandler, { once: true });
          // mouseup 이벤트는 한번만 실행되면 되기에 { once :true } 옵션을 추가해준다.
        }}
      />
    </>
  );
};

export default DragBoundary;
