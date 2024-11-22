import React from 'react';
import Confetti from 'react-confetti';

export default function ResultConfetti() {
  return (
    <div style={{ position: 'absolute', width: '500px', height: '200px', top: 0 }}>
      <Confetti
        width={540} // 캔버스 너비
        height={400} // 캔버스 높이
        gravity={0.02} // 입자 떨어지는 속도
        numberOfPieces={150} // 입자의 개수
      />
    </div>
  );
}
