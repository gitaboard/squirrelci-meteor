Router.route(version.concat("/:repository/analysis"), {where: 'server'})
  .get(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello Analysis!"}');
  })
  .post(function () {
    this.response.writeHeader(200, {'Content-Type': 'application/json'});
    this.response.end('{"repsonse": "Hello Analysis!"}');
  });
