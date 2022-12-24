const routes = require("./routs/samplerouts")
const sequlize = require("./configaration/Config")
const User = require("./modal/indexmodal")
const multer = require('fastify-multer')



// const sampleController = require("./controller.samplecontroller.js") 
// const sampleControllerPostItem = require("./controller.samplePostController.js")

sequlize.sync().then(result=>{
  console.log("synged********")
})


const fastify = require('fastify')({
    logger: true
  })
  fastify.register(require('fastify-cors'), { 
    // put your options here
  })
  routes.map(route => fastify.route(route)) //route is reg to fastify

  fastify.register(multer.contentParser)
   

  // use only at the btm
  fastify.listen(4000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
  // fastify.listen(3000)



  