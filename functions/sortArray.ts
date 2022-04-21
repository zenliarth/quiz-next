export function sortArray(elements: any[]): any[] {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map((obj) => obj.value);
}
