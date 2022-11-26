export function filterDuplicates(arr1, arr2) {
  arr1.forEach((i) => {
    let found = arr2.find((f) => f == i);
    if (!found) {
      arr2.push(i);
    }
  });
}
