import { getCurrencies } from "./getCurrencies";

//describe explains that the test is currencies
describe ('Currencies', () => {
    //check the array contains all the wanted currencies
    it('it should contain USD, GBP, and EUR', () => {
       expect(getCurrencies()).toEqual(jasmine.arrayContaining(['USD', 'EUR', 'GBP']));
    });

    //check if pass when asked if CAD is in the array
    it('should not contain CAD', () => {
        expect(getCurrencies()).not.toContain('CAD');
     });
});