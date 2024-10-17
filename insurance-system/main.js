"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const insurance_1 = require("./insurance");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getInsuranceDetails() {
    rl.question("Enter insurance type (Health, Life, Vehicle): ", (typeInput) => {
        const type = typeInput;
        rl.question("Enter your age: ", (ageInput) => {
            const age = parseInt(ageInput);
            rl.question("Enter coverage amount: ", (coverageInput) => {
                const coverageAmount = parseFloat(coverageInput);
                rl.question("Do you have any pre-existing conditions? (yes/no): ", (conditionInput) => {
                    const hasPreExistingConditions = conditionInput.toLowerCase() === 'yes';
                    const policy = new insurance_1.InsurancePolicy(type, age, coverageAmount, hasPreExistingConditions);
                    const premium = policy.calculatePremium();
                    console.log(`The calculated insurance premium is: ${premium.toFixed(2)}`);
                    rl.close();
                });
            });
        });
    });
}
getInsuranceDetails();
