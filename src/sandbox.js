
// What is the verb and path of the request to get a list of ALL pets from this API?
// Verb: get
// Path: http://localhost:3000/pets

// The response of this request should be a list of pets. What kind of data structure is the list of pets? What is the status code of this request? Test it with Postman.
// The data structure is an array of objects
// The status code is 200 OK

/* ---------------------------------------------------- */

// What is the verb and path of the request to get the details of a single pet from this API?
// Verb: GET
// Path to get Everly B: http://localhost:3000/pets

// What are the query parameters of this request?
// name="Everly B"

// Test with Postman:
// What kind of data structure is the details of a single, valid pet? What is the status code of this request?
// [
//     {
//       "id": 1,
//       "name": "Everly B",
//       "species": "Dog",
//       "age": 13,
//       "owner": "Kari"
//     }
//   ]
// Status code 200 OK
// Array of one object

// What do we get back if we give an invalid pet id? What is the status code of this request?
// Get 200 OK code, but empty array

/* ---------------------------------------------------- */

// What is the verb and path of the request to create a new pet using this API?
// verb: POST
// path: http://localhost:3000/pets

// What are the parameters we can pass into this request? Which parameters are required? Which are optional?
//  All parameters are optional - if you send this type of request (post) with no parameters, a pet is created with only an ID
// You can send: name, species, age, owner; you can also send any other parameter (e.g. I sent "lifespan")

// When a pet is successfully created, we get back a response. What is the data structure of this response? What is the status code?
// 

// After we create a pet, we can verify that the pet was created from the response. We can also verify that the pet was created and added to the list of pets another way. What else can we do?
// 
