const ternaryValue = 50<=30? 'Right' : 'Wrong'
console.log(`The result of ternary operator: ${ternaryValue}`);

const Animal = {
    species: "mamal",
    name: "dog",
    legs: 4
};

const resultOfAnimal = Animal.legs == 4? Animal.name: 'It is not coorect.'
console.log(`The result of Animal type: ${resultOfAnimal}`)