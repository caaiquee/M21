const {maior, menor} = require('./MMA')
describe('Funções matematicas', () =>{
    it('MMA', () =>{
        expect(maior).toEqual(7)
        expect(menor).toEqual(9)
    })
})