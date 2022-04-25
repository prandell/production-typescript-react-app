export function capitaliseFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function capitaliseFirstLetterOfEachWord(str: string) {
  return str.replace(/(^\w|(\s|-)\w)/g, (m) => m.toUpperCase())
}
