// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (let index = 0; index < names.length; index++) {
//         const name = names[index];
    
//         console.log(name + ' was found at index ' + index);
//         }
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);



const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
],
createdAt: 1543945177623
};


// const { addresses: [whiteHouse, sherlock] } = person;

const { firstName, lastName, ...attributes } = person;

// console.log(person);

