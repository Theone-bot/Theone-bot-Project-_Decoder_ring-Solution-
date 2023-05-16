// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe ("substitution()", () => {
    it("Should properly substitute encode message", () => {
        const expected = "ykrrpik"
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq", encode = true);
        expect(actual).to.equal(expected);
    })
})