// require your server and launch it here
const server = require('./api/server.js')

server.listen(4000, () => {
    console.log('\n*** Server Listening on http://localhost:4000 ***\n')
})