const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let winner = array.find(entry => entry.result === "W")
  return winner ? winner.year : undefined;
}
