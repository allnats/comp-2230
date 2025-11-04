/**
 * Author: Allendale Nato
 * October 21, 2025
 *
 * JavaScript Async Demonstration
 */

// Simulate an Async operation using a timeout.

function simulateAsyncOperation() {
    // A Promise represents an operation that hasn't completed yet.
    // but is expected to in the future.

    return new Promise((resolve) => {
        setTimeout(() => {
            // "Resolve" is used to signal a successful completion
            // of the promise.
            resolve("Data fetched after waiting");
        }, 2000);
    });
}

async function demonstrateAsyncCall() {
    console.log("Starting async operation...");
    const res = await simulateAsyncOperation();
    console.log(`Result: ${res}`);
    console.log("Async operation has ended.");
}

demonstrateAsyncCall();

/**
 * A promise is an object that encapsulates the result of an async operation.
 *
 * It can be in three states: Pending, Fulfilled, or Rejected
 */

const myPromise = new Promise((resolve, reject) => {
    // Here we simulate a condition to demo both resolve and reject scenarios.
    const coin_flip = Math.random() < 0.5 ? true : false;
    if (coin_flip) {
        resolve("Promise was resolved successfully.");
    }
    reject("Promise was rejected.");
});

myPromise.then((res) => console.log(res)).catch((err) => console.error(err));

/**
 * The Fetch API provides a global fetch method that offers an easy logical way
 * to retrieve resources asynchronously.
 */

async function getCountries() {
    try {
        const res = await fetch(
            "https://restcountries.com/v3.1/all?fields=name"
        );

        if (!res.ok) {
            throw new Error(`HTTP Error: status ${res.status}`);
        }

        // Converts it to a JSON object
        const data = await res.json();
        console.log(data);

        return data;
    } catch (err) {
        console.log(`Failed to fetch countries, ${err.message}`);
    }
}

async function listCountries() {
    const countries = await getCountries();

    if (countries) {
        countries.forEach((country) => {
            const {
                name: { common },
            } = country;
            console.log(
                `Country: ${common}, Official Name: ${country.name.official}`
            );
        });
    }
}

listCountries();
