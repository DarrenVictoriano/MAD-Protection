const expect = require("chai").expect;
const encryption = require("../controllers/encryption");

describe("Encrypt", function () {
    it("should encrypt data", function () {
        expect(encryption.encrypt("darren"))
            .to.not.equal("darren");
    });

    it("should decrypt data", function () {
        expect(encryption.decrypt("e7fba42d97ffb872a451c13182d70762:3a374f949397c5204ec716c2121a2e69"))
            .to.equal("darren");
    });
});
