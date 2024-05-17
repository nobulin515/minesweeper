import { useState } from 'react';
import styles from './index.module.css';
const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const creatBoard = (userInputs: number[][], bombMap: number[][]) => {
  for (let i = 0; i < 9; i++) {
    for (let o = 0; o < 9; o++) {
      if (userInputs[i][o] === 0) {
        board[i][o] = bombMap[i][o];
      } else if (userInputs[i][o] === -1) {
        board[i][o] = userInputs[i][o];
      }
    }
  }
  console.log(board);
};

const Home = () => {
  const [userInputs, setUserInputs] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [bombMap, setBombMaps] = useState([
    [11, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    const newBombMap = structuredClone(bombMap);
    console.log(x, y);
    creatBoard(userInputs, bombMap);
    // console.log(board);
    setBombMaps(newBombMap);
  };
  console.log(board);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.block}
                style={{ backgroundPosition: `${(board[y][x] - 1) * -30}px 0px` }}
                key={`${x}-${y}`}
                onClick={() => clickHandler(x, y)}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
