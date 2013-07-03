var counts = require('../models/counts');

exports.index = function (req, res) {
  res.render('index', {
    title: 'strike!',
    subtitle: 'everybody panic!',
    on: counts.get()
  });
};