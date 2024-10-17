
import * as readline from 'readline';
import { InsurancePolicy, InsuranceType } from './insurance';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getInsuranceDetails() {
    rl.question("Enter insurance type (Health, Life, Vehicle): ", (typeInput) => {
        const type = typeInput as InsuranceType;

        rl.question("Enter your age: ", (ageInput) => {
            const age = parseInt(ageInput);

            rl.question("Enter coverage amount: ", (coverageInput) => {
                const coverageAmount = parseFloat(coverageInput);

                rl.question("Do you have any pre-existing conditions? (yes/no): ", (conditionInput) => {
                    const hasPreExistingConditions = conditionInput.toLowerCase() === 'yes';

                    const policy = new InsurancePolicy(type, age, coverageAmount, hasPreExistingConditions);
                    const premium = policy.calculatePremium();

                    console.log(`The calculated insurance premium is: ${premium.toFixed(2)}`);
                    rl.close();
                });
            });
        });
    });
}


getInsuranceDetails();