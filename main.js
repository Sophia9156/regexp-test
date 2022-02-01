const str = `
010-1234-5678
suhyun9156@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp))
// const regexp = /the/gim
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
console.log(str.match(/./g))