##  Interview Test for `Shopthing`

Web IP Address: http://167.99.182.203/

1. Copy .env file
    ```code
    $ cp .env.prod .env
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