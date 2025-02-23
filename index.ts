type User = {
  type: 'user';
  name: string;
  age: number;
};

type Admin = {
  type: 'admin';
  name: string;
  role: string;
};

type Person = User | Admin;

// Helper type to exclude the "type" field
type ExcludeType<T> = Omit<T, 'type'>;

function filterPersons<T extends 'user' | 'admin'>(
  persons: Person[],
  personType: T,
  criteria: Partial<ExcludeType<T extends 'user' ? User : Admin>>
): (T extends 'user' ? User : Admin)[] {
  return persons.filter(person => 
    person.type === personType &&
    Object.entries(criteria).every(([key, value]) => 
      (person as any)[key] === value
    )
  ) as any;
}

// Example usage:
const persons: Person[] = [
  { type: 'user', name: 'Kwesi', age: 25 },
  { type: 'admin', name: 'Johnson', role: 'Manager' },
  
];

const users = filterPersons(persons, 'user', { age: 25 }); // User[]
const admins = filterPersons(persons, 'admin', { role: 'Manager' }); // Admin[]

console.log(users);  // [{ type: 'user', name: 'Kwesi', age: 25 }]
console.log(admins); // [{ type: 'admin', name: 'Johnson', role: 'Manager' }]