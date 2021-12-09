export function renderedData(text) {
  let eraseMarkup = text.replace(/<\/?p>|<\/?ul>|<\/?li>/g, '')
  let replaceAmperSand = eraseMarkup.replace(/&amp;/g, 'e')
  return replaceAmperSand
}