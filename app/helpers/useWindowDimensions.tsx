'use client';
import { useEffect, useState } from 'react';

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimentions>({
      width: 300,
      height: 300,
    });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void =>
      window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};
export default useWindowDimensions;

// import { useState, useEffect } from 'react';

// function useWindowSize() {
//   const isWindowClient = typeof window === 'object';

//   const [windowSize, setWindowSize] = useState(
//     isWindowClient ? window.innerWidth : undefined
//   );

//   useEffect(() => {
//     function setSize() {
//       setWindowSize(window.innerWidth);
//     }
//     setSize();
//     if (isWindowClient) {
//       window.addEventListener('resize', setSize);

//       return () => window.removeEventListener('resize', setSize);
//     }
//   }, [isWindowClient, setWindowSize]);

//   return windowSize;
// }

// export default useWindowSize;
