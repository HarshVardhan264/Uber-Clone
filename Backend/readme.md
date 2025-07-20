# `/users/register` Endpoint Documentation

## Description
The `/users/register` endpoint allows clients to register a new user. It validates the input and returns a JWT token along with the user details upon successful registration.

## HTTP Method
`POST`

## Endpoint
`/users/register`

## Request Data Requirements

The request body must be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (valid email, min 5 characters)",
  "password": "string (min 6 characters)"
}
```

## Successful Response

A successful response will return a JSON object with the following structure:

```json
{
  "token": "JWT token string",
  "user": {
    "_id": "userID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "if available"
  },
  "message": "User registered successfully"
}
```

## Error Response

In case of validation errors, the response will contain an errors array with details about each error:

```json
{
  "errors": [
    {
      "msg": "Validation error message",
      "param": "field name",
      "location": "body"
    }
  ]
}
```

# `/users/login` Endpoint Documentation

## Description
The `/users/login` endpoint allows registered users to log in. It verifies the provided credentials (email and password) and returns a JWT token along with the user details if the authentication is successful.

## HTTP Method
`POST`

## Endpoint
`/users/login`

## Request Data Requirements

The request body must be in JSON format and include the following fields:

```json
{
  "email": "string (valid email, min 5 characters)",
  "password": "string (min 6 characters)"
}
```

## Successful Response

A successful response will return a JSON object with the following structure:

```json
{
  "token": "JWT token string",
  "user": {
    "_id": "userID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "if available"
  },
  "message": "User logged in successfully"
}
```

## Error Response

In case of authentication errors, the response will contain an errors array with details about each error:

```json
{
  "errors": [
    {
      "msg": "Authentication error message",
      "param": "field name",
      "location": "body"
    }
  ]
}
```

# `/users/profile` Endpoint Documentation

## Description
The `/users/profile` endpoint allows an authenticated user to retrieve their profile information. The user is authenticated via a JWT token supplied in cookies or the Authorization header.

## HTTP Method
`GET`

## Endpoint
`/users/profile`

## Authorization
A valid JWT token must be provided either as a cookie (`token`) or in the `Authorization` header as a Bearer token.

## Successful Response

A successful response returns the authenticated user's profile data (excluding the password).  

```json
{
  "_id": "userID",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": "if available"
}
```

## Error Response

In case the user is not authenticated or the token is invalid, the response will be:

```json
{
  "message": "Unauthorized"
}
```

# `/users/logout` Endpoint Documentation

## Description
The `/users/logout` endpoint allows an authenticated user to log out. It invalidates the user's JWT token, preventing further access to protected resources without re-authentication.

## HTTP Method
`POST`

## Endpoint
`/users/logout`

## Authorization
A valid JWT token must be provided either as a cookie (`token`) or in the `Authorization` header as a Bearer token.

## Successful Response

A successful response will return a JSON object with the following structure:

```json
{
  "message": "User logged out successfully"
}
```
