Router.route(version.concat("/:repository/tests"), {where: 'server'})
  .get(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello ' + this.params.repository + ' Tests!"}');
  })
  .post(function (repository) {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello ' + this.params.repository + ' Tests!"}');
  });
