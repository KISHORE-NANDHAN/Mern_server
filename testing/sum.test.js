//test cases for our unit fun sum
const sum = require('../test/sum')

test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);
})
//run npm test under server folder
test('Object in array',()=>{
    const data = {one:1}
    data['two'] =2
    expect(data).toEqual({one:1,two:2})
})

//toBeNull -> if the received value is null
test('Value is Null',()=>{
    const n = null
    expect(n).toBeNull();
})
//toBeDefined -> if the value is defined or not
test('value is defined',()=>{
    const a = 1;
    expect(a).toBeDefined();
})

//to Be Truthy -> received value should be true
test('value is true',()=>{
    const bool = true
    expect(bool).toBeTruthy();
})