import { compute } from "./compute";

//describe explains that the test is compute
describe ('compute', () => {
    //it explains that the returned value should be 0
    it('should return 0 if the input is negative', () => {
        //compute function is called and passed -1
        const result = compute(-1);
        //expect checks if 0 was returned
        expect(result).toBe(0);
    });

    //it explains that the returned value should be 0
    it ("should return input+1 if the input is positive", () => {
        //compute function is called and passed 1
        const result = compute(1);
        //expect checks if 2 was returned
        expect(result).toBe(2);
        //we can do further checks with ToBeGreater, toBeLessThan, etc..
    })
});