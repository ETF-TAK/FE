import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Confetti from 'react-confetti';
import useAccelation from './useAccelation';

export default function ResultConfetti() {
  const gravity = useAccelation(20, 6, 2, 100);
  return (
    <div style={{ position: 'absolute', width: '500px', height: '200px', top: 0 }}>
      <Confetti
        width={540} // 캔버스 너비
        height={400} // 캔버스 높이
        gravity={gravity / 100} // 입자 떨어지는 속도
        numberOfPieces={150} // 입자의 개수
      />
    </div>
  );
}
