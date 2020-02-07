##  Interview Test for `Shopthing`

Web IP Address: http://167.99.182.203/

1. Backend environment files in backend folder
    ```code
    $ cp .env.prod .env
    $ cp config.prod.js .config.js
    ```
2. Client environment files in client folder
    ```code
    $ cp .env.prod .env
    ```
3. Build the project.
    ```code
    $ docker-compose up -d --build
    ```
4. Test [backend and client]
    ```
    $ npm run test
    ```
5. Start Manually [backend and client]
    ```
    $ npm run start
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