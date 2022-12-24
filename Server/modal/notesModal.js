const Sequelize = require("sequelize");
const sequelize = require("../configaration/Config");

const Notes = sequelize.define("Notes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Title: {
    type: Sequelize.STRING,
  },
  Description: {
    type: Sequelize.STRING,
  },
  keyid: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.NUMBER,
  },
});

// `sequelize.define` also returns the model
async function Addnote(data) {
  let result = await Notes.create({
    Title: data.Title,
    Description: data.Description,
    keyid: data.keyid,
  });
  return result;
 
}
async function getAllNoteData() {
  let result = await Notes.findAll();
  return result;
 
}
async function getNoteById(data) {
  let result = await Notes.findOne({
    where: {
      id: data.id,
    },
  });
  return result;
 
}
async function deleteDataById(data) {
  let result = await Notes.destroy({
    where: {
      id: data.id,
    },
  });
  return result;
 
}
async function updateDataById(id,data) {
 
  
  let result = await Notes.update(
    { Title: data.Title, Description: data.Description },
    {
      where: {
        id: id.id,
      },
    }
  );
  return result;
  
}

module.exports = {
  Addnote,
  Notes,
  getAllNoteData,
  getNoteById,
  updateDataById,
  deleteDataById
};
