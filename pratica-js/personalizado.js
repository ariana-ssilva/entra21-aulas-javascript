// 1 - Crie uma variável para cada tipo existente com let ou var
// string
// number
// boolean
// array
// object json
// function
function declararVariaveis() {
    var nome = "Ariana" // String
    var numero = 1;  // Number
    var true_false = false; // boolean

    var estados = [
        "Santa Catarina",
        "Paraná",
        "Rio Grande do Sul"
    ] 


    { //json
        nome = "Ariana"
        numero = 1
        true_false = false
        estados = ["Santa Catarina", "Paraná", "Rio Grande do Sul"]
    }

    function oi() { // function
        console.warn("Oi mundo")
    }

    oi();
}

console.log(declararVariaveis)


// 2 - Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)

// console.log(typeof nome);

// console.log(typeof numero);

// console.log(typeof true_false);

// console.log(typeof estados);

// console.log(typeof oi);


// // 3 - Para cada variável faça um IF que tome uma decisão e também no ELSE

// // if com String e boolean
// if (nome == true_false) {
//     console.log("Reveja seus conceitos")
// } else {
//     console.log("Ué")
// }

// // if com array e numeric
// if (estados.length > numero) {
//     console.warn(" A lista de estados possui mais que dois indices", estados)
// } else {
//     console.warn("Que mixuruco", estados)
// }

// // 4 - Para uma variável string e number, faça um switch que tome uma decisão

// // switch de String
// switch (nome) {
//     case 'Ariana':
//         console.log('É a Ariana');
//         break;
//     case 'Bruna':
//         console.log('Essa não é a Ariana');
//         break;
//     case 'Cecilia':
//         console.log('Também não é a Ariana');
//         break;
//     default:
//         console.log(`Não é a Ariana, eu já falei`);
// }

// // switch com numeric
// switch (numero) {
//     case 1:
//         console.log('Janeiro');
//         break;

//     case 2:
//         console.log('Fevereiro');
//         break;


//     case 3:
//         console.log('Março');
//         break;


//     case 4:
//         console.log('Abril');
//         break;


//     case 5:
//         console.log('Maio');
//         break;


//     case 6:
//         console.log('Junho');
//         break;


//     case 7:
//         console.log('Julho');
//         break;


//     case 8:
//         console.log('Agosto');
//         break;


//     case 9:
//         console.log('Setembro');
//         break;


//     case 10:
//         console.log('Outubro');
//         break;


//     case 11:
//         console.log('Novembro');
//         break;


//     case 12:
//         console.log('Dezembro');
//         break;

//     default:
//         console.log(`Não é a Ariana, eu já falei`);
// }


// // 5 - Para uma variável do tipo array, faça as repetições possíveis
// // for com índice
// // foreach

// for (var chave = 0; chave < estados.length; chave++) {
//     console.log("Array logado com for simples: " + estados[chave])
// }

// estados.forEach(percorre);

// function percorre(item, index) {
//     console.warn("Array logado com forEach:")
//     console.log(index + "- " + item)
// }













