var helloWorldRouter = require('./helloWorld');
var partsRouter = require('./parts');

module.exports = function createRoutes(app){

  app.use('/helloWorld', helloWorldRouter);

  app.use('/parts', partsRouter);


}