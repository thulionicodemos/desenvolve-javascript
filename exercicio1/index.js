/*Neste exercício, você vai criar 5 funções. Você pode escolher entre usar function ou arrow function.:

1 - Soma: recebe dois números e retorna a soma

2 - Subtrai: recebe dois números e retorna a diferença

3 - Multiplica: recebe dois números e retorna o produto

4 - Divide: recebe dois números e retorna o quociente

5 - MostraResultado: recebe dois numeros e executa um console para cada operação, exibindo o nome da operação e o resultado

Seu console deve ter o formato:

console.log(`[nome_da_operacao] entre ${num1} e ${num2}`, fn(num1, num2)) */

//Forma feita com arrow function, mais simples

const soma = (x, y) => x + y
const subtrai = (x, y) => x - y
const multiplica = (x, y) => x * y
const divide = (x, y) => x / y

const mostraResultado = (x, y) => {
    console.log(`Soma entre ${x} e ${y}`, soma(x, y))
    console.log(`Diferença entre ${x} e ${y}`, subtrai(x, y))
    console.log(`Produto entre ${x} e ${y}`, multiplica(x, y))
    console.log(`Quociente entre ${x} e ${y}`, divide(x, y))
}

mostraResultado(10, 2)
