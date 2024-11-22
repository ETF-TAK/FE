import React from 'react';
import Rain from 'react-rain-animation';
import 'react-rain-animation/lib/style.css';

export default function ResultRain() {
  return (
    <div
      style={{
        top: 0,
        position: 'absolute',
        width: '500px', // 원하는 너비
        height: '400px', // 원하는 높이
        overflow: 'hidden', // 빗방울이 영역을 넘지 않도록 설정
        zIndex: 100,
        pointerEvents: 'none', // 클릭 방지
      }}
    >
      <Rain
        numDrops={150} // 빗방울 개수
        color="#87CEEB" // 빗방울 색상
        alpha={0.8} // 빗방울 투명도
        radius={[2, 4]} // 빗방울 크기 범위
        speed={[0.5, 1.5]} // 빗방울 속도 범위
      />
    </div>
  );
}
