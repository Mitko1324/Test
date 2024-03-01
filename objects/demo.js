const person = {
  name: 'Lyubo',
  age: 24,
  height: 184,
};

// two ways for accessing fields

// object.field when you know which field you want to access

person.name // Lyubo
person.age // 24
person.height // 184

// object['fieldName'] when fieldName is dynamic

person['name']
person['age']
person['height']

person.name = 'Mitko'
person['name'] = 'Mitko'