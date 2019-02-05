/*	
| ================================================================== |
| ================================================================== |
| Criteria:  Node.js framework set to use Express.js                 |
| Criteria:  API Service Port Configuration is configured to run on  |
| port 8000.  The default remains private facing using localhost     |
| for connectivity.                                                  |
| ================================================================== |*/
    
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const blockchain = require('./blockchain')
const chain = new blockchain.Blockchain()

/*	
| ================================================================== |
| ================================================================== |
| Criteria:  API Service Port Configuration is configured to run on  |
| port 8000.  The default remains private facing using localhost     |
| for connectivity.                                                  |
| ================================================================== |*/
app.listen(8000, () => console.log('API Service Port Configuration listening on port 8000'))
app.use(bodyParser.json())
app.get('/', (req, res) => res.status(404).json({
  "status": 404,
  "message": "Accepted endpoints: POST /block or GET /block/{BLOCK_HEIGHT}"
}))

/*	
| ================================================================== |
| ================================================================== |
| Criteria:  GET Block Endpoint.  The web API contains a GET         |
| endpoint that responds to a request using a URL path with a block  |
| height parameter or properly handles an error if the height        |
| parameter is out of bounds.                                        |
| URL Path:  http://localhost:8000/block/[blockheight]               |
| ================================================================== |*/
app.get('/block/:height', async (req, res) => {
    try {
      const response = await chain.getBlock(req.params.height)
      res.send(response)
    } catch (error) {
      res.status(404).json({
        "status": 404,
        "message": "The Block is not found"
      })
    }
  })
  
  /**
   * Criteria: POST Block endpoint using key/value pair within request body. Preferred URL path http://localhost:8000/block
   */
  /*	
| ================================================================== |
| ================================================================== |
| Criteria:  POST Block Endpoint.  The web API contains a POST       |
| endpoint that allows posting a new block with the data payload     |
| option to add data to the block body. Block body should support a  |
| string of text.                                                    |
| URL Path:  http://localhost:8000/block                             |
| ================================================================== |*/
app.post('/block', async (req, res) => {
    try {
        if (req.body.body === '' || req.body.body === undefined) {
            res.status(400).json({
              "status": 400,
              "message": "Please provide the body parameter"
            })
          } else {
              var aa = new blockchain.Block(req.body.body);
              //chain.pru();
              await chain.addBlock(aa);
              const height = await chain.getBlockHeight();
              const response = await chain.getBlock(height);
              res.status(201).send(response);
          }
        } catch (error) {
            res.status(404).json({
              "error": "An error occured"
            });
        }
})