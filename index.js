// code your solution here


const superbowlWin = (record) => {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin;
  