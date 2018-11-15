exports.handler = function(event, context, callback) {

    // Do stuff here, you'll send the answer back in the body of the call back bellow
    
    const thingToSendBack = 'Hello World!'
    const statusCode = 200
const headers = {
 'Access-Control-Allow-Origin': '*',
 'Access-Control-Allow-Headers': 'Content-Type',
}
    callback(null, {
        statusCode,
        headers,
        body: JSON.stringify(thingToSendBack),
      })
    }