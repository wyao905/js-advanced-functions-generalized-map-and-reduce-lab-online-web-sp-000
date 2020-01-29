// Add your functions here
function map(array, fnc) {
  let rt = []
  for(let ele of array) {
    rt.push(fnc(ele))
  }
  return rt
}

function reduce(array, fnc, start) {
  if(!start) {
    start = array
  }
  for(let ele of array) {
    start = fnc(ele, start)
  }
  return start
}