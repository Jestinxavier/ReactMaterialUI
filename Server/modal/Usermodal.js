const Sequelize = require('sequelize');
const sequelize = require('../configaration/Config');
const uniqid = require('uniqid'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Usertable = sequelize.define('Usertable', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    
  },
  lastName: {
    type: Sequelize.STRING
  },
  uuid: {
    type: Sequelize.STRING
  },
  passWord:{
    type: Sequelize.STRING
  },
  Email:{
    type: Sequelize.STRING
  },
  status:{
    type:Sequelize.STRING
  },
  agree:{
    type:Sequelize.STRING
  },

});



// `sequelize.define` also returns the model
async function  UpdateMail(data){
  let id = uniqid.time()
  let result = await Usertable.create({Email:data,uuid:id,status:'1'}); 
  console.log(result.dataValues.uuid,"result.dataValues.uuid");

  return {uniqId:result.dataValues.uuid}
  
}
async function  updateUserData({agree,email,firstName,lastName,password,showPassword}){
  let result = await Usertable.create({firstName:firstName,lastName:lastName,passWord:password,agree:agree,status:'1',Email:email}); 

  return {uniqId:result.dataValues.uuid}
  
}
async function idValidater(id){
  let result = await Usertable.findOne({ where:{uuid:id}})
  return result.dataValues;
}
async function emailValidater(email){
  let result = await Usertable.findOne({ where:{Email:email}})
  if(result){
    return true;
  }else{
    return false;
  }
}
async function statusChainge(id){
  try{
    let result = await Usertable.update({ status:'2' },{ where:{uuid:id}})
    return true;
  }catch(err){

    return false;
  }
}
async function updateData({agree,email,firstName,lastName,password,showPassword}){
  try{
    // const hash = bcrypt.hashSync(password, salt);
    let result = await Usertable.update({ firstName:firstName,lastName:lastName,passWord:password,agree:agree },{ where:{Email:email}})
    return true;
  }catch(err){

    return false;
  }
}

module.exports = {UpdateMail,Usertable,idValidater,statusChainge,updateUserData,emailValidater,updateData} 