// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$('#pick_kanas li').click( function() {
  $(this).toggleClass('selected');

  return false
});

$('#pick_kanas').submit( function() {
  console.log($(this).find('.selected'));
  return false
});

Array.prototype.key = function(value, key) {
  var length = this.length;

  while( length-- > 0 ) {
    if ( this[length][value] == key ) {
      return this[length]
    }
  }
}

$(function() {
  new KanaQuiz(document.getElementById('check_kana'), document.getElementById('pick_kanas'));
});
