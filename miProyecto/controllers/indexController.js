let indexController = {
    home: (req, res)=> {
        res.render('index', { title: 'Express' });
      }
}
module.exports = indexController