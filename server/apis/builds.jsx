Router.route(version.concat("/:repository/build"), {where: 'server'})
  .get(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello Build!"}');
  })
  .post(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello Build!"}');
  });
