Router.route('/api/v1', function () {
  // render the Home template with a custom data context
  this.render('API', {data: {title: 'My Title'}});
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/api/v1/one', function() {
  this.render('One');
});

// when you navigate to "/two" automatically render the template named "Two".
Router.route('/api/v1/two', function() {
  this.render('Two');
});
