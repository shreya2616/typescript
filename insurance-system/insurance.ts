

export enum InsuranceType {
    Health = "Health",
    Life = "Life",
    Vehicle = "Vehicle",
}

export class InsurancePolicy {
    constructor(
        public type: InsuranceType,
        public age: number,
        public coverageAmount: number,
        public hasPreExistingConditions: boolean
    ) {}

    calculatePremium(): number {
        let basePremium = 0;

        switch (this.type) {
            case InsuranceType.Health:
                basePremium = 100; 
                if (this.age > 50) basePremium += 50; 
                if (this.hasPreExistingConditions) basePremium += 100; 
                break;

            case InsuranceType.Life:
                basePremium = 150; 
                if (this.age > 50) basePremium += 75; 
                break;

            case InsuranceType.Vehicle:
                basePremium = 200; 
                if (this.age < 25) basePremium += 50; 
                break;
        }

        
        return basePremium + (this.coverageAmount * 0.01); 
    }
}