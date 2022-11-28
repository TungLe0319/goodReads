export function addOrSkip(arr, item) {
  let found = arr.find(i => i.id == item.id)
  if (!found) {
    arr.push(item)
  }
}



export function addOne(array, item){
  array = [item, ...array]
  return array
}

export function addMany(array, adding ,type){
  array =  adding.map(element => new type(element));
}