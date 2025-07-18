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