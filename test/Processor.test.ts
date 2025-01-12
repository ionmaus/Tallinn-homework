import {User} from '../src/User';
import {Processor} from '../src/Processor';

describe('Processor test', () =>{
    let user1: User
    beforeEach(()=> {
        user1 = new User("John", "Smith", "58245434", "Saint street")
    })
    test('Default state undefined', () => {
        expect(user1.consentGiven).toBeUndefined()
    })
    test('State is true', () =>{
        Processor.giveConsent(user1)
        expect(user1.consentGiven).toBe(true)
    })
    test('Processor verify consent test',() => {
         Processor.giveConsent(user1)
         expect(Processor.verifyConsent(user1)).toBeTruthy()
    })
    test('Verify consent is false',() => {
         expect(Processor.verifyConsent(user1)).toBeFalsy()
    })

})