function superbowlWin(record) {
  const winningYear = record.find(obj => obj.result === "W");
  if (winningYear) {
    return winningYear.year;
  } else {
    return undefined;
  }
}