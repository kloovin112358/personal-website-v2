import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function App() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <>
      <p className="display-1 text-center mt-3 fw-bold" ref={boxRef}>No</p>
    </>
  );
}

export default App;
