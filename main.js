// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

console.log("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 5
let numberTwo = 3

sum = numberOne + numberTwo

console.log(`Resultado da soma: ${sum}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let a = 3

if(typeof(a) == "number") {
  console.log("É um número")
} else {
  console.log("Não é um número")
}
  
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let b = "10"
if (typeof(b) == "string") {
  console.log("É uma string")
} else {
  console.log("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let c = 1

if (c == true) {
  console.log("É um booleano")
} else {
  console.log("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

numberOne = 8
numberTwo = 3

sub = numberOne - numberTwo

console.log(`Resultado da subtração: ${sub}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

numberOne = 6
numberTwo = 2

multi = numberOne  * numberTwo

console.log(`Resultado da multiplicação: ${multi}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

numberOne = 36
numberTwo = 6

div = numberOne  * numberTwo

console.log(`Resultado da multiplicação: ${div}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number = 8

if ((number % 2) == 0) {
  console.log("É um número par")
} else {
  console.log("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

number = 5

if ((number % 2) != 0) {
  console.log("É um número ímpar")
} else {
  console.log("Não é um número ímpar")
}