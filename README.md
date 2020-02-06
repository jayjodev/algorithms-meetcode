##  Interview Test for `Shopthing`

Web IP Address: http://167.99.182.203/

1. Backend environment files in backend folder
    ```code
    $ cp .env.prod .env
    $ cp config.prod .env
    ```
2. Build the project.
    ```code
    $ docker-compose up -d --build
    ```
3. Test [backend and client]
    ```
    $ npm run test
    ```
4. Start Manually [backend and client]
    ```
    $ npm run test
    ```

#### Test Requirement:

`Backend Component`
Set up an express server with a single route. This
route should execute the following function, and
return its output.

* express

`frontend Component`
Set up a frontend where a user can input a number, and
receive the result of the above function (or an
appropriate error message).

* react

#### Additional Functionality
Simple `auth` system for the test

```code
exports.algorithm = function (req, res) {
    try {
        const userInput = parseFloat(req.body.number);

        // Basic validation for user Input
        if (req.body.number == '' || req.body.number == null || userInput <= 1 || userInput >= 10000) {
            return res.json("Please input a integer number (2 to 9,999)");
        }
        // console.log(typeof userInput)
        if (!Number.isInteger(userInput)) {
            return res.json("your number is not a integer number");
        }

        // Find Prime numbers
        const isPrime = new Array(userInput + 1).fill(true);
        isPrime[0] = false
        isPrime[1] = false

        const primes = [];

        for (let i = 2; i <= userInput; i += 1) {
            if (isPrime[i] === true) {
                primes.push(i);
                let nextNumber = i * i;
                while (nextNumber <= userInput) {
                    isPrime[nextNumber] = false;
                    nextNumber += i;
                }
            }
        }

        // Find median number or numbers
        const medianPrime = [];

        // Sort prime numbers
        const sortedPrimes = [...primes].sort((a, b) => a - b);
        if (sortedPrimes.length % 2 !== 0) {
            medianPrime.push(sortedPrimes[sortedPrimes.length / 2 - 0.5]);
        }
        else {
            medianPrime.push(sortedPrimes[sortedPrimes.length / 2 - 1])
            medianPrime.push(sortedPrimes[sortedPrimes.length / 2])
        }

        result = { "userInput": userInput, "primes": primes, "medianPrime": medianPrime }
        return res.json(result);
    }
    catch (e) {
        return res.json(e);
    }
}
```