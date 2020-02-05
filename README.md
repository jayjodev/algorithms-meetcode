##  Interview Test for `Shopthing`

1. Copy backend environment files in backend folder
    ```code
    $ cp .env.prod .env
    $ cp config.prod .env
    ```
2. Build the project.
    ```code
    $ docker-compose up -d --build
    ``` 
3. Test
    ```
    $ npm run test
    ```

## Features

#### Support Tech

1. docker
2. nginx
3. Jest
4. MongoDB


#### Test requirement:

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

#### Additional functionality
Simple `auth` system for the test

