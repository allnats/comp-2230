function displayCatFacts(facts) {}

function simulateAsyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("simulateAsyncOperation: 5s has elapsed!");
        }, 5000);
    });
}

async function demoAsyncCall() {
    console.log("Starting async simulation...");
    const result = await simulateAsyncOperation();
    console.log(result);
}

demoAsyncCall();

async function fetchCatBreeds() {
    const reqUrl = "https://catfact.ninja/breeds";
    try {
        const res = await fetch(reqUrl);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error("Error fetching Cat Breeds!");
    }
}

fetchCatBreeds()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
