var helloWorldRouter = require('./helloWorld');
var partsRouter = require('./parts');
var orderRouter = require('./order');
var adminRouter = require('./admin');

module.exports = function createRoutes(app){

  app.use('/helloWorld', helloWorldRouter);

  app.use('/parts', partsRouter);

  app.use('/order', orderRouter);

  app.use('/admin', adminRouter);

}