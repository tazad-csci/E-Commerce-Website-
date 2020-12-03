var helloWorldRouter = require('./helloWorld');
var partsRouter = require('./parts');
var orderRouter = require('./order');

module.exports = function createRoutes(app){

  app.use('/helloWorld', helloWorldRouter);

  app.use('/parts', partsRouter);

  app.use('/order', orderRouter);


}