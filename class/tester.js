const Review = require("./review.js");
const Bicycle = require("./bicycle.js");
const ElectricBicycle = require("./electric-bicycle.js");


class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
        this.bikeTester = undefined;
        this.eBikeTester = undefined;
    }

    submitReview(vehicle, starRating, text) {
        if (!vehicle.validate()) {
            throw new Error ("Cannot submit review for invalid vehicle.");
        }

        const review = new Review(vehicle, this, starRating, text);

        review.addReview();

        if (vehicle instanceof Bicycle) {
            this.bikeTester = true;
            this.eBikeTester = false;
        }
        if (vehicle instanceof ElectricBicycle) {
            this.bikeTester = true;
            this.eBikeTester = true;
        }

        return review;
    }
}


module.exports = Tester;
