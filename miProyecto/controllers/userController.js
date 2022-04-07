let userController = {
    register: (req, res)=> {
        res.render('register', { title: 'Express' });
      },
      login: (req, res)=> {
        res.render('login', { title: 'Express' });
      },
      profile: (req, res)=> {
        res.render('profile', { title: 'Express' });
      },
      edit: (req, res)=> {
        res.render('profile-edit', { title: 'Express' });
      }
}
module.exports = userController