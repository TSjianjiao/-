x = 123

if(x < 0 || (!(x % 10) && x)) return false
let x2 = x, res = 0
while(x2){
  res = res * 10 + x2 % 10
  x2 = Number.parseInt(x2 / 10)
}
console.log(x)
console.log(res)
console.log(res === x)
