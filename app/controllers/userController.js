import User from "../models/User.js";
const userController = {

  profil: async function (req, res) {
    const user = await User.read(req.session.userId)
    res.render('profil', { user: user });
  },

};

export default userController;
