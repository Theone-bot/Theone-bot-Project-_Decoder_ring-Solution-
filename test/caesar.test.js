// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("caesar", () => {
    it("should return false if shift amount is 0", () => {
        //const expected = false;
        const actual = caesar("Hlelo",0,encode = true);
        expect(actual).to.be.false;
    })

    it("should return false if shift is greater than or equal to 26", () => {
        //const expected = false;
        const actual = caesar("Hlelo",50,encode = true);
        expect(actual).to.be.false;
    })

    it("should return false if shift is less than or equal to -26", () => {
        const expected = false;
        const actual = caesar("Hlelo",-40,encode = true);
        expect(actual).to.be.false;
    })

    it("Shift encoding is working properly", () => {
        const expected = "cheud pdjdclqh";
        const actual = caesar("Zebra Magazine", 3, encode = true);
        expect(actual).to.equal(expected);
    })
})