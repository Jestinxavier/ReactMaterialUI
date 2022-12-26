const { name } = require("../modal/indexmodal");
const { UpdateMail } = require("../modal/notesModal");

const addNotes = async (req, reply) => {
  
  let upload = await Addnote(req.body.Datas);

  if (upload) {
    return {
      msg: "updated successfully",
      status: 1,
    };
  } else {
    return {
      msg: "updated not successfully",
      status: 0,
    };
  }
};

const getallNotes = async (req, reply) => {
  let upload = await getAllNoteData();
 reply.send({
  data:resultData,
  status: 1,
  msg:'fetched all data'
 })
  
};
const getId = async (req, reply) => {
let id = req.params;
  let upload = await getNoteById(id);
  // let Notedata = Object.values(upload)
 reply.send({
  data:upload,
  status: 1,
  msg:'fetched all data by id'
 })
  
};
const updateId = async (req, reply) => {
let id = req.params;
  let upload = await updateDataById(id,req.body.Datas);
  // let Notedata = Object.values(upload)
 reply.send({
  data:upload,
  msg:'Updated sucessfull'
 })
  
};
const deleteId = async (req, reply) => {
let id = req.params;
  let upload = await deleteDataById(id);
  // let Notedata = Object.values(upload)
 reply.send({
  data:upload,
  msg:'Updated sucessfull'
 })
  
};

module.exports = {
  deleteId,
  updateId,
  getId,
  getallNotes,
  addNotes,
};
