/**
 * Tipos primitivos
 * number --> Némros inteiros, números decimais
 * string --> textos, caracteres
 * boolean --> true ou false
 */

let age: number = 36;
let fullName: string = 'Misaias';
let isAlive: boolean = false;

// Inferência de Tipos
let animal = 'Cat';
let quantity = 23;

// Parametros e retornos de funmções
 function sum(a :number, b:number):number{

    const result = a+b;

    return result
 }

// console.log(sum(1,1));

//Função copm retorno opcional
function greeting(fullName:string): string | void {

    if (fullName){
        
        return`Hello, ${fullName}!`;

    }

}

//Função com parametros opcionais
function stringOrNumberSize(value: string | number): number{
if (typeof value  === 'string'){

    return value.length;
}
 
return value;

}

console.log(stringOrNumberSize('hello'));
console.log(6)
