var helloWorldRouter = require('./helloWorld');

module.exports = function createRoutes(app){

  app.use('/helloWorld', helloWorldRouter);


}