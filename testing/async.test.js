//async.test.js

const {fetchData,MyData} = require('../test/async')

test('Callback data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin')
            done()
        }catch(error){
            done(error)
        } 
    }
    fetchData(callback)
})

test('callback my data',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001)
            done()
        }catch(error){
            done(error)
        }
    }
    MyData(callback)
})

//mock function
test('Mocking callback function ',done=>{
    const MockFunction = jest.fn(data=>{
        expect(data).toBe('admin')
        console.log("Mock Function")
        done()
    })
    fetchData(MockFunction)
})