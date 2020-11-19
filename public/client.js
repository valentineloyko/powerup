/* global TrelloPowerUp */

var GREY_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
var WHITE_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: GREY_ROCKET_ICON,
			text: 'Estimate Size',
      callback: function(t) {
        return t.popup({
          title: "Estimation",
          url: 'estimate.html',
        });
      }
		}];
	},
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'estimate')
    .then(function(estimate) {
      return [{
        icon: estimate ? GREY_ROCKET_ICON : WHITE_ROCKET_ICON,
        text: estimate || 'No Estimate!',
        color: estimate ? null : 'red',
      }];  
    });
  },
  'card-detail-badges': function(t, options) {
    return t.get('card', 'shared', 'estimate')
    .then(function(estimate) {
      return [{
        title: 'Estimate',
        text: estimate || 'No Estimate!',
        color: estimate ? null : 'red',
        callback: function(t) {
          return t.popup({
            title: "Estimation",
            url: 'estimate.html',
          });
        }
      }]
    });
  },
});
