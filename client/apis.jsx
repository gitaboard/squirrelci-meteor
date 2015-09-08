var version = "/api/v1"

Router.route(version, function () {
  // render the api template with a custom data context
  this.render('api', {data: {title: 'SquirrelCI API'}});
});
