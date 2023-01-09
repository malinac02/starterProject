
export function calculateWinner(squares) {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  
  for (let i = 0; i < combos.length; i++) {
    const a = combos[i][0];
    const b = combos[i][1];
    const c = combos[i][2];
    if (squares[a] && squares[b] && squares[c]) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }
  return null;
}
