var counts = {
  bus: 60,
  boat: 30,
  car: 50,
  train: 40,
  scooter: 10,
  couch: 50
};

var hit = function(mode) {
  if (counts[mode]) {
    counts[mode]++;
  }
};

var get = function() {
  return counts;
};

module.exports.hit = hit;
module.exports.get = get;