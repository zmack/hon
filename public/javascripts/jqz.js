$.fn.colorize = function(options) {
  var startColor = parseInt(options['start'].replace(/(#|\s)/,''), 16);
  var endColor = parseInt(options['end'].replace(/(#|\s)/,''), 16);
  var duration = options['duration'] || 500;
  
  return this.each(new jQuery.fx([], { step: function(e,n,t) { console.log(t); return 2}}, 'color'));

}
