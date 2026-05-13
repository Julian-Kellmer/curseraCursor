// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
//console.log(globalVar);
//console.log(globalLet); 
//console.log(globalConst);
//console.log(globalConst);



function show(){
    var functionVar = "Soy una var con alcance de bloque";
    let functionLet = "Soy un let con alcance de bloque";
    const functionConst = "Soy un const con alcance de bloque";
    }
    show();
    
    //console.log(functionVar); // Lanza ReferenceError
    //console.log(functionLet); // Lanza ReferenceError
    console.log(functionConst); // Lanza ReferenceError
    