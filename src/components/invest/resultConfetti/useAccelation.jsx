import { useState, useEffect } from 'react';

/**
 *
 * @param {Option}
 *  - start: 시작 number
 *  - end:  끝 number
 *  - step: 가속 step
 *  - metronom: ms
 *
 * start에서 시작해서 end까지 step별로 metronom동안 증가
 * @returns
 */
export default function useAccelation(start = 20, end = 1, step = 1, metronom = 500) {
  const [now, setNow] = useState(start);

  useEffect(() => {
    if (now >= end) {
      const timeoutId = setTimeout(() => {
        setNow((val) => (val -= step));
      }, metronom);
      return () => clearTimeout(timeoutId);
    }
  }, [now]);

  return now;
}
