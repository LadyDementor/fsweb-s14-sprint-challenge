// Server'ı buradan başlatın


const port=9000;
const server=require("./api/server");

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));