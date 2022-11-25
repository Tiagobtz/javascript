let n =[5,2,4,1,3]
console.log(`O vetor tem ${n.length} posições`)
n[5] = 6
n.push(7)
console.log(`O vetor tem ${n.length} posições`)
n.sort()
console.log(`Os valores do vetor n são ${n}`)
let pos = n.indexOf(1)

console.log(`O valor 1 está na posição ${pos}`)