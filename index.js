// add solution here
function theBeatlesPlay(musicians, instruments)  {
  let emptyArr = [];
  for ( let i = 0; i <musicians.length; i++ )  {
    let newStr = `${musicians[i]} plays ${instruments[i]}`;
    emptyArr.push(newStr);
  }
  return emptyArr;
}
