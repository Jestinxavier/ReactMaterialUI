const { name } = require("../modal/indexmodal");
const {
  UpdateMail,
  Usertable,
  idValidater,
  statusChainge,
  updateUserData,
  emailValidater,
  updateData,
} = require("../modal/Usermodal");
const { sentmail } = require("./NodeMailer");

const addUser = async (req, reply) => {
  let resultData = await UpdateMail(req.body.userMail);
  console.log(resultData.uniqId, "resultData.uniqId");
  let mailstatus = await sentmail(req.body.userMail, resultData.uniqId);
  reply.send({
    status: 1,
    msg: "fetched all data by id",
  });
};
const adduserData = async (req, reply) => {
  let userEmail = req.body.email;

  let email = await emailValidater(userEmail);
  if (email) {
    let updateDatas = await updateData(req.body);
  } else {
    let resultData = await updateUserData(req.body);
  }

  reply.send({
    status: 1,
    msg: "fetched all data by id",
  });
};

const unicqIdChecker = async (req, reply) => {
  let id = req.body.userid;
  let response = await idValidater(id);
  if (response.status == "1") {
    let statusValidater = await statusChainge(response.uuid);
    reply.send({
      status: statusValidater,
      msg: "sigup page",
    });
  } else {
    reply.send({
      status: false,
      msg: "sigup page",
    });
  }
};

module.exports = {
  addUser,
  unicqIdChecker,
  adduserData,
};
