'use client';
import { useState, useEffect } from 'react';
import Confetteehee from './confetti';
import useWindowDimensions from '../helpers/useWindowDimensions';

export default function Button() {
  const [clicked, setClicked] = useState(false);
  const size = useWindowDimensions();

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>Hello</button>
      <Confetteehee
        win={clicked}
        width={size.width}
        height={size.height}
      />
    </div>
  );
}
