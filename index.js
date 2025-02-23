function filterPersons(persons, personType, criteria) {
    return persons.filter(function (person) {
        return person.type === personType &&
            Object.entries(criteria).every(function (_a) {
                var key = _a[0], value = _a[1];
                return person[key] === value;
            });
    });
}
// Example usage:
var persons = [
    { type: 'user', name: 'Kwesi', age: 25 },
    { type: 'admin', name: 'Johnson', role: 'Manager' },
];
var users = filterPersons(persons, 'user', { age: 25 }); // User[]
var admins = filterPersons(persons, 'admin', { role: 'Manager' }); // Admin[]
console.log(users); // [{ type: 'user', name: 'Kwesi', age: 25 }]
console.log(admins); // [{ type: 'admin', name: 'Johnson', role: 'Manager' }]
