const server = require("./src/app")
const {conn}= require("./src/db")

const PORT = 3000

server.listen(PORT, ()=>{
   conn.sync({force:false})
    console.log(`server In port ${PORT}`)
})


