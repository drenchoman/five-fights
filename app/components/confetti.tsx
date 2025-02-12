import React from 'react';
import Confetti from 'react-confetti';
type Confetteehee = {
  width: number | undefined;
  height: number | undefined;
  win: boolean;
};

export default function Confetteehee({
  win,
  width,
  height,
}: Confetteehee) {
  return (
    <div>
      <Confetti
        width={width}
        height={height}
        run={win}
        numberOfPieces={1000}
        recycle={false}
      />
    </div>
  );
}
