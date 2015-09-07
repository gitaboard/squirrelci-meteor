var version = '/api/v1'

Router.route('/api/v1', function () {
  // render the api template with a custom data context
  this.render('api', {data: {title: 'SquirrelCI API'}});
});

Router.route('#{version}/repositories', {where: 'server'})
  .get(function () {
    this.response.end('get request\n');
  })
  .post(function () {
    this.response.end('post request\n');
  });

Router.route('#{version}/organziations', {where: 'server'})
  .get(function () {
    this.response.end('get request\n');
  })
  .post(function () {
    this.response.end('post request\n');
  });

Router.route('#{version}/builds', {where: 'server'})
  .get(function () {
    this.response.end('get request\n');
  })
  .post(function () {
    this.response.end('post request\n');
  });
