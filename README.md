# get-type-of-properties-object
set the type on the keys of object.

map the keys of object to the type of values.

example: 
 
const object = { foo: 'bar', bar: 55}

convertToType(object) // { foo: 'string', bar: 'number' }

OBS: supports nested objects.
