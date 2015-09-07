Router.route('/', function () {
  // render the api template with a custom data context
  this.render('main', {data: {title: 'SquirrelCI API'}});
});
