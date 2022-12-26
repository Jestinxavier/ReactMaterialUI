const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"yourmail@gmail.com",
        pass:"yourpassword"
    }
  });


   function sentmail(Usermail,id){
    console.log(id,"datas",Usermail);
    link = `<a href='http://localhost:3000/auth/register/${id}'>SignUp</a>`
    let details = {
        from:"yourmail@gmail.com",
        to:`${Usermail}`,
        subject:"testing nodemailer",
        html: `<h1>Welcome</h1>${link} <p>That was easy!</p>`
      }
  transporter.sendMail(details,(err)=>{
    if(err){
        console.log("The error is",err);
    }else{
        console.log("emil sent susses");
    }
  })
}
module.exports = {
    sentmail,
}