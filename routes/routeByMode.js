var counts = require('../models/counts');

var routeByMode = function(req, res) {
  var mode = req.params.mode;
  counts.hit(mode);
  res.redirect('ahh?mode=' + mode);
};

exports.routeByMode = routeByMode;