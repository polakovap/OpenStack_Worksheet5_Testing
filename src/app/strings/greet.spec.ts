import { greet } from "./greet";

describe('greet', () => {
    //check that return from greet function contains the name
    it('it should include the name in the message', () => {
        expect(greet('Jeff')).toContain('Jeff');
    });

    //check the greeting does not contain the name
    it('it should not include the name in the message', () => {
        expect(greet('Jeff')).not.toContain('Frank');
    });
});

