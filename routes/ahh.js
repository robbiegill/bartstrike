var ahh = function(req, res) {
  var mode = req.query.mode;
  res.render('ahh', {
    title: 'Strike!',
    mode: mode,
    link: links(mode)
  });
};

function links(mode) {
  switch(mode) {
    case 'bus':
      return {
        a: 'http://temporaryterminal.org/find-your-bus-line',
        title: 'Find your bus line',
        crazy: 'You are insane'
      };
    case 'boat':
      return {
        a: 'http://sanfranciscobayferry.com/',
        title: 'Find your ferry',
        crazy: 'Good choice - beer and wine aboard!!'
      };
    case 'car':
      return {
        a: 'http://511.org/',
        title: 'Traffic report',
        crazy: 'I\'d rather walk'
      };
    case 'train':
      return {
        a: 'http://www.caltrain.com/schedules/weekdaytimetable.html',
        title: 'Find your train',
        crazy: 'Packed like sardines in a tin can'
      };
    case 'scooter':
      return {
        a: 'http://www.redbubble.com/people/vivendulies/works/9870782-bad-dude-on-a-scooter?p=sticker',
        title: 'Rad scooter guy',
        crazy: 'Too cool for school'
      };
    case 'couch':
    default:
      return {
        a: 'http://www.hulu.com',
        title: 'or Hulu',
        crazy: 'You know you\'ll just watch Netflix'
      };
  }
}

exports.ahh = ahh;