//mock.test.js
//mock getData and Process the Mocked Data

jest.mock('../test/utils is mocked',()=>{
    getData:jest.fn()
})

const getData = require("../test/utils")
const process = require("../test/processData")
//mockReturnValue

test('Mocked the process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue("Mocked data")
    expect(processData()).toBe("Mocked data")
})
