/*
if (condition){
    // code
}
*/

const array = [1, 2, 3, 4, 5];

array.forEach(item => {
    if (item % 2 === 0){
        console.log(`O número ${item} é par` );
    } else {
        console.log(`O número ${item} é impar`);
    }
});


const array2 = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array2.forEach(item => {
    if (item % 2 ===0){
        console.log(`O número ${item} é divisivel por 2`);
    } else if(item % 3 === 0){
        console.log(`O número ${item} é divisivel por 3`);
    } else if(item % 5 === 0){
        console.log(`O número ${item} item é divisivel por 5`);
    }
});


// se eu quero que ele caia em mais de uma condição eu nao uso else
const array2 = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array2.forEach(item => {
    if (item % 2 ===0){
        console.log(`O número ${item} é divisivel por 2`);
    } if(item % 3 === 0){
        console.log(`O número ${item} é divisivel por 3`);
    } if(item % 5 === 0){
        console.log(`O número ${item} item é divisivel por 5`);
    }
});


const fruit = 'pera';

switch (fruit){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto inexistente');
        break;
}