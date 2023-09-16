class Vehicle {
    constructor(modelName, year, price) {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    validate() {
        return (
            !!(this.modelName && this.price && this.year) &&
            this.year >= 1950 &&
            this.year <= 2100
            );
    }

    update(modleName, year, price) {
        if (year < 1950 || year > 2100) {
            throw new Error ("Year must be between 1950 and 2100");
        }
        if (price <= 0) {
            throw new Error ("Price must be greater than 0");
        }

        this.modelName = modleName;
        this.year = year;
        this.price = price;
    }

    getDetails() {
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
    }

    findReviewByTester(testerName) {
        return this.reviews.find(review => review.tester.name === testerName);
    }
}

module.exports = Vehicle;
