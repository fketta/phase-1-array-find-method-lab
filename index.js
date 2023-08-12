function superbowlWin(array){
    const winningEntry = array.find(entry => entry.result === "W");
    if (winningEntry)
    {return (winningEntry.year)}
    else
    return 
}
    
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

console.log(superbowlWin(record));
