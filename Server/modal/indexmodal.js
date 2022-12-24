const Sequelize = require('sequelize');
const sequelize = require('../configaration/Config');

const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// `sequelize.define` also returns the model
async function  name(){
  await User.create({ firstName: "jestin", lastName: "xavier" });
    console.log(User === sequelize.models.User); // true
}

module.exports = {name,User}