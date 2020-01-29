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
    start = array[0]
    let i = 1
  }
  for(let i = 0; i < array.length; i++) {
    start = fnc(array[i], start)
  }
  return start
}