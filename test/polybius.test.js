// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("polybius()", () => {
    it("Should properly encode message", () => {
        const expected = "23513434112251"
        const actual = polybius("message", encode = true);
        expect(actual).to.eql(expected);
    })
})