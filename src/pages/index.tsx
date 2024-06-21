import { useState } from 'react';
import styles from './index.module.css';

const creatBoard = (userInputs: number[][], board: number[][]) => {
  for (let i = 0; i < 9; i++) {
    for (let o = 0; o < 9; o++) {
      if (userInputs[i][o] === 1) {
        board[i][o] = 0;
      }
    }
  }
};

const bombCreat = (bombMap: number[][]) => {
  const xs = Math.floor(Math.random() * 9);
  const ys = Math.floor(Math.random() * 9);
  bombMap[xs][ys] = 11;
  return bombMap;
};
const Home = () => {
  const board = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];

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
    [11, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    // useStateコピーしてreactに怒られないようにする
    const newBombMap = structuredClone(bombMap);
    const newUserInputs = structuredClone(userInputs);
    // ボムをランダムで生成
    const bombSetting = bombCreat(newBombMap);

    // クリックしたらuserInputsを書き換え
    console.table(newUserInputs);
    newUserInputs[y][x] = 1;
    console.table(newUserInputs);
    // 書き換えたコピーuseStateをset
    setUserInputs(newUserInputs);
    setBombMaps(bombSetting);
  };
  creatBoard(userInputs, board);
  console.log(board);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((cell, x) =>
              cell !== -1 ? (
                <div
                  className={styles.smpleStyle}
                  style={{ backgroundPosition: `${(bombMap[y][x] - 1) * -30}px 0px` }}
                  key={`${x}-${y}`}
                  onClick={() => clickHandler(x, y)}
                />
              ) : (
                <div
                  className={styles.stone}
                  key={`${x}-${y}`}
                  onClick={() => clickHandler(x, y)}
                />
              ),
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
