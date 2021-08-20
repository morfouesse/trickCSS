

// var tutu; // Ne plus utilisé si possible, Portée globale, ancienne façon de déclarer des variables en JS
let toto; // Portée liée au contexte dans laquelle elle est déclarée
const titi = 'Titi'; // Portée liée au contexte et n'est pas une variable modifiable

class User {
    constructor (firstNameParam, lastNameParam, ageParam) {
        this.firstName = firstNameParam;
        this.lastName = lastNameParam;
        this.age = ageParam;
    }

    description() {
        return this.firstName + ' ' + this.lastName + ' a ' + this.age + ' ans';
    }

}

// Après héritage
class Developper extends User{
    constructor (firstNameParam, lastNameParam, ageParam, specializationParam, experienceParam) {
        super(firstNameParam, lastNameParam, ageParam);
        this.specialization = specializationParam;
        this.experience = experienceParam;
    }

    description() {
        return super.description() +
        ' et développe du ' +
        this.specialization +
        ' depuis ' +
        this.experience +
        ' ans';
    }
}

const tableNumber1 = [
    0, 1, 1, 2, 3, 5, 8
];

const tableNumber2 = [
    13, 21, 34, 55, 89, 144
];

const notArrowFunction = function() {
    console.log('notArrowFunction');   
}

const arrowFunction = () => {
    console.log('arrowFunction'); 
}

function findExemple(numberValueSearch) {
    const result = tableNumber1.filter((numberItem) => {
        return numberItem === numberValueSearch;
    });
    console.log('findExemple', result);
}
findExemple(1);

// .map
// .find
// .reduce
// .filter
// ...


// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const fusionArray = [...tableNumber1, ...tableNumber2];
console.log(fusionArray);

const table1 = [1,2,3];
const table2 = [1,2,3];

if (table1 === table2) {
    console.log('identique');
} else {
    console.log('différent');
}

const jsonValueTest = {
    name: 'Erwan',
    surname: 'Baccon',
    age: 30
};

const jsonValueTest2 = {};

const testAssign = Object.assign({}, jsonValueTest);
