# Introduction
- We are going to perform CRUD operations in Node JS (Using ExpressJS) by using Mongo DB as backend.
- Creating the REST API's and CRUD operations.

# Problem Statement
- We have a Programmer, who have attributes of Name, Age, Skill and hasJob.
- Programmer:
     - name (string)
     - age (number)
     - skill (string)
     - hasJob (boolean)

- And if we consider our application is running in port 9000, the different API's look like this:

# API Endpoints
- Saving the programmer details
POST : http://localhost:9000/programmer

- Fetch all the programmer details
GET : http://localhost:9000/programmers

- Fetch a particular programmer with unique ID
GET : http://localhost:9000/programmer/:id

- Update a particular programmer with unique ID
PATCH : http://localhost:9000/programmer/:id

- Delete a perticular programmer details
DELETE : http://localhost:9000/programmer/:id


# Tools / Configration

- NodeJS
- ExpressJS
- Mongo DB
- Postman
- Rest API's
- VS Code

# Stacks
- Backend: NodeJS (using ExpressJS)
- Database: MongoDB
- Tested all API endpoints using POSTMAN.
