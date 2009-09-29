$.fn.colorize = function(options) {
  var startColor = parseInt(options['start'].replace(/(#|\s)/,''), 16);
  var endColor = parseInt(options['end'].replace(/(#|\s)/,''), 16);
  var duration = options['duration'] || 500;
  var self = this;
  z = function() { };
  k = function(val) {
    var color = "#" + Math.round(val).toString(16);
    console.log(color);
    self[0].style.color = color;
  }
  
  return new jQuery.fx(this[0], { step: k, duration: 1500, curAnim: {}, complete: z  }, 'color').custom(startColor, endColor);

}
