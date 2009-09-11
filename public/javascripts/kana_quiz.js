KanaQuiz = function(kana_check_element, kana_list_element, options) {
  var self = this;

  this.options = options || {};
  this.kana_list_element = $(kana_list_element);
  this.kana_check_element = $(kana_check_element);
  this.kana_displayed = document.getElementById('kana');
  this.romaji_input = document.getElementById('romaji');

  addFormHandlers();
  initKana(getSelectedKana());


  function addFormHandlers() {
    self.kana_list_element.submit(submitKanaList);
    self.kana_check_element.submit(submitKana);
  }

  function submitKanaList() {
    var romaji = self.romaji_input.value.toLowerCase();

    self.kana = getSelectedKana();

    self.romaji_input.focus();
    self.romaji_input.setSelectionRange(0,romaji.length);

    displayNextKana();
  }

  function submitKana() {
    var kana = self.kana_displayed.innerHTML;
    var romaji = self.romaji_input.value.toLowerCase();

    var currentKana = self.kana.key('kana', kana);

    if ( currentKana.romaji == romaji ) {
      addCorrectMatch(currentKana, romaji);
    } else {
      addFalseMatch(currentKana, romaji);
    }

    self.romaji_input.setSelectionRange(0,romaji.length);
    displayNextKana();
    
    return false
  }

  function initKana(aKana) {
    this.kana = aKana;
  }

  function getSelectedKana() {
    var kana = [];
    $(self.kana_list_element).find('.selected em').each(
      function(e,f) {
        kana.push({
          kana: this.innerHTML,
          romaji: this.nextSibling.nextSibling.innerHTML.match(/\( (\w+) \)/)[1]
        })
      })

    return kana;
  }

  function getNextKana() {
    var index = Math.floor(Math.random() * self.kana.length);

    return self.kana[index];
  }

  function displayNextKana() {
    var kana = getNextKana();

    $(self.kana_displayed).html(kana.kana);
  }

  function addCorrectMatch(kana, romaji) {
    console.log('Correct, sir, ' + kana.kana + ' is ' + kana.romaji);
  }

  function addFalseMatch(kana, romaji) {
    console.log('Wrong, ' + kana.kana + ' is ' + kana.romaji);
  }
}
