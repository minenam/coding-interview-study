function drawLine(screen, width, x1, x2, y) {
  // 시작 위치와 끝 위치를 바이트 단위로 변환
  let startByte = Math.floor(x1 / 8);
  let endByte = Math.floor(x2 / 8);

  // 시작 위치와 끝 위치에서의 오프셋 계산
  let startOffset = x1 % 8;
  let endOffset = x2 % 8;

  // 시작 위치의 바이트에서 시작 오프셋 이후의 픽셀을 설정
  if (startOffset !== 0) {
      startByte++;
  }
  // 끝 위치의 바이트에서 끝 오프셋 이전의 픽셀을 설정
  if (endOffset !== 7) {
      endByte--;
  }

  // 시작 위치에서 끝 위치까지의 바이트를 모두 채움
  for (let i = startByte; i <= endByte; i++) {
      screen[(width / 8) * y + i] = 0xFF;
  }

  // 시작 위치와 끝 위치의 오프셋에 따라 부분적으로 픽셀을 설정
  let startMask = 0xFF >> startOffset;
  let endMask = ~(0xFF >> (endOffset + 1));

  // 시작 위치와 끝 위치가 같은 바이트에 있는 경우
  if (startByte === endByte) {
      let mask = startMask & endMask;
      screen[(width / 8) * y + startByte] |= mask;
  } else {
      // 시작 위치와 끝 위치가 다른 바이트에 있는 경우
      if (startOffset !== 0) {
          screen[(width / 8) * y + startByte - 1] |= startMask;
      }
      if (endOffset !== 7) {
          screen[(width / 8) * y + endByte + 1] |= endMask;
      }
  }
}

// 예시 
let screen = new Array(16).fill(0); // 16바이트 크기의 바이트 배열로 초기화
let width = 32; // 화면의 폭
let x1 = 4; // 시작 x 좌표
let x2 = 23; // 끝 x 좌표
let y = 2; // y 좌표

drawLine(screen, width, x1, x2, y);

console.log(screen);
/**
 * [
    0, 0,  0,   0,   0, 0,
    0, 0, 15, 255, 255, 0,
    0, 0,  0,   0
  ]
 */
