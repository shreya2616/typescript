"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsurancePolicy = exports.InsuranceType = void 0;
var InsuranceType;
(function (InsuranceType) {
    InsuranceType["Health"] = "Health";
    InsuranceType["Life"] = "Life";
    InsuranceType["Vehicle"] = "Vehicle";
})(InsuranceType || (exports.InsuranceType = InsuranceType = {}));
class InsurancePolicy {
    constructor(type, age, coverageAmount, hasPreExistingConditions) {
        this.type = type;
        this.age = age;
        this.coverageAmount = coverageAmount;
        this.hasPreExistingConditions = hasPreExistingConditions;
    }
    calculatePremium() {
        let basePremium = 0;
        switch (this.type) {
            case InsuranceType.Health:
                basePremium = 100;
                if (this.age > 50)
                    basePremium += 50;
                if (this.hasPreExistingConditions)
                    basePremium += 100;
                break;
            case InsuranceType.Life:
                basePremium = 150;
                if (this.age > 50)
                    basePremium += 75;
                break;
            case InsuranceType.Vehicle:
                basePremium = 200;
                if (this.age < 25)
                    basePremium += 50;
                break;
        }
        return basePremium + (this.coverageAmount * 0.01);
    }
}
exports.InsurancePolicy = InsurancePolicy;
