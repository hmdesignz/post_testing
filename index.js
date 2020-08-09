const server = require('./api/server')


const port = process.env.port || 3000;



server.listen(port,()=>console.log(`We up and listening on port ${port}`));