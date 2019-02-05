# Blockchain Developer Nanodegree
# RESTful Web API with Node.js Framework

This project introduces the fundamentals of web APIs with Node.js frameworks.  By using your own private blockchain to create a web API is a first step toward developing your own web applications that are consumable by a variety of web clients.  These fundamentals will be utilized later in the program where students will be programming blockchain technologies utilizing similar features applied towards smart contracts.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

The modules crypto-js and level should already be installed based on the previous project.  If not you may want to install them as per the below instructions in the Configuring your project section.
- Install crypto-js with --save flag to save dependency to our package.json file
```
npm install crypto-js --save
```
- Install level with --save flag
```
npm install level --save
```
Testing the RESTful Web API will require the installaion of Postman or Curl.  These tools will assist in testing the API endpoints.  Follow the install instructions provided by each website.  Also, take a minute to view the documentation if necessary.
Postman website:  [https://www.getpostman.com/]
Curl website:  [https://curl.haxx.se/]
### Configuring your project

- Use NPM to initialize your project and create package.json to store project dependencies.
```
npm init
```
- Install express with --save flag to save dependency to our package.json file
```
npm install express --save
```
If not installed already install crypto-js and level.
- Install crypto-js with --save flag to save dependency to our package.json file
```
npm install crypto-js --save
```
- Install level with --save flag
```
npm install level --save
```
## Testing

To test code:
1: Open a command prompt or shell terminal after install node.js.
2: Enter a node session, also known as REPL (Read-Evaluate-Print-Loop) and run index.js.
```
node index.js
```
3: Your local host and port should now be configured for GET and POST requests.
```
API Service Port Configuration listening on port 8000
```
4: Use Postman or Curl to initiate GET and POST testing
- Using Postman, select GET from dropdown and paste URL: http://localhost:8000/block/0
```
http://localhost:8000/block/0
```
- Using Postman, select POST from dropdown and paste URL: http://localhost:8000/block
- In Postman select Body; select raw; select JSON(application/json)
- In the Body section type the data: {"body": "RESTful Web API test 1 body contents"}
```
{"body": "RESTful Web API test 1 body contents"}
```
5: Verify the correct responses are received
- Correct GET response:
```
{
    "hash": "4f579451332aebd06acf162b35cd89b04f0a3da89e2f46cf8758988529dba599",
    "height": 0,
    "body": "First block in the chain - Genesis block",
    "time": "1542668827",
    "previousBlockHash": ""
}
```
- Correct POST response ("height" parameter will vary based on the amount of entries in the block):
```
{
    "hash": "0369fef293638112ad1501f8f724d1d3bc252341a32f28bd66555e7af4c59495",
    "height": 11,
    "body": "RESTful Web API test 1 body contents",
    "time": "1542669715",
    "previousBlockHash": "538a7cbf28e4538cb5e1e5d9566032eb3f98daddd3fe829d837726913a06dd2f"
}
```
