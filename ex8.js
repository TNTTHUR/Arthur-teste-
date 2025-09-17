let numeros2 = [5, 8, 2, 10, 3];
let maior = numeros2[0];

for (let n of numeros2) {
  if (n > maior) {
    maior = n;
  }
}

console.log("Maior número do array:", maior);