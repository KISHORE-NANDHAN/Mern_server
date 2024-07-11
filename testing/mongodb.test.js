const mongoose = require('mongoose')
const { describe } = require('node:test')

describe('MongoDB Connected',()=>{
    beforeAll(async ()=>{
        const url = 'mongodb+srv://KishoreNandhan:manager@cluster0.1vg6qh1.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(url)
    })
    //call test case inside describe and below beforeall
    test('MongoDb connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
})
