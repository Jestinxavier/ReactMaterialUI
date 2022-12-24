
const {addNotes, getallNotes, sampleGetControlListArrayobj,getAllItems, samplePostControl,samplePostControlList, sampleGETControlList,getId,updateId,deleteId} = require("../controller/samplecontroller");
  
const routes =[
   
      {
        method:'POST',
        url:'/api/v1/notes',
        handler:addNotes
      },
      {
        method:'GET',
        url:'/api/v1/notes',
        handler:getallNotes
      },
      {
        method:'GET',
        url:'/api/v1/notes/:id',
        handler:getId
      },
      {
        method:'PUT',
        url:'/api/v1/notes/:id',
        handler:updateId
      },
      {
        method:'DELETE',
        url:'/api/v1/notes/:id',
        handler:deleteId
      },
      



]
module.exports=routes;
