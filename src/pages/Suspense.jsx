import React, { useState } from "react";
import AfterSuspense from "../components/suspense/after/Main";
import BeforeSuspense from "../components/suspense/before/Main";

/**
 *
 * 예제 출처 : https://www.daleseo.com/react-suspense/
 */
const Suspense = () => {
  const [suspenseMode, setSuspenseMode] = useState();

  const onSuspense = () => {
    setSuspenseMode(!suspenseMode);
  };

  return (
    <div>
      <button onClick={onSuspense}>
        {suspenseMode ? <p>Suspense 끄기</p> : <p>Suspense 켜기</p>}
      </button>
      {suspenseMode ? <AfterSuspense /> : <BeforeSuspense />}
    </div>
  );
};

export default Suspense;
