const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//! Dot notation
person.isMarried = true;
person.country = "USA";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red"
}

const values = Object.values(car);
console.log(values);

// hasOwnProperty
console.log(car.hasOwnProperty("brand"));
console.log(car.hasOwnProperty("price"));

const user = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}

console.log(user.address.street);
console.log(user.address.city);
console.log(user.address.state);
console.log(user.address.zip);