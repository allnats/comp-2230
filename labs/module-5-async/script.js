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
