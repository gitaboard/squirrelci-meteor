Router.route(version.concat("/:repository/configuration"), {where: 'server'})
  .get(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello Configuration!"}');
  })
  .post(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello Configuration!"}');
  });
