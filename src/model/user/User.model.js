const userSchema = require("./User.schema");

const insertUser = (userObj) => {
  return new Promise((resolve, reject) => {
    userSchema(userObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

module.exports = { insertUser };
