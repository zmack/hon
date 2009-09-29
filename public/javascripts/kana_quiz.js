KanaQuiz = function(kana_check_element, kana_list_element, options) {
  var self = this;

  this.options = options || {};
  this.kana_list_element = $(kana_list_element);
  this.kana_check_element = $(kana_check_element);
  this.kana_displayed = document.getElementById('kana');
  this.romaji_input = document.getElementById('romaji');

  addFormHandlers();
  initKana(getSelectedKana());
  addBallCounter();

  this.kana_check_element.hide();


  function addBallCounter() {
    var list = document.createElement('li');
    list.id = 'ball_counter';

    self.kana_check_element.before(list);
    self.counter = new BallCounter(list);
  }

  function addFormHandlers() {
    self.kana_list_element.submit(submitKanaList);
    self.kana_check_element.submit(submitKana);
  }

  function submitKanaList() {
    var romaji = self.romaji_input.value.toLowerCase();

    self.kana = getSelectedKana();
    hideKanaList();
    
    showKanaCheck(function() {
      self.romaji_input.focus();
      self.romaji_input.setSelectionRange(0,romaji.length);
    });

    displayNextKana();
  }

  function hideKanaList() {
    self.kana_list_element.fadeOut(500);
  }

  function showKanaList() {
    self.kana_list_element.fadeIn(500);
  }

  function showKanaCheck(callback) {
    self.kana_check_element.fadeIn(500, callback);
  }
  
  function hideKanaCheck() {
    self.kana_check_element.fadeOut(500);
  }

  function submitKana() {
    var romaji = self.romaji_input.value.toLowerCase();
    var currentKana = getCurrentKana();

    if ( currentKana.romaji == romaji ) {
      addCorrectMatch(currentKana, romaji);
    } else {
      addFalseMatch(currentKana, romaji);
    }

    self.romaji_input.setSelectionRange(0,romaji.length);
    displayNextKana();
    
    return false
  }

  function getCurrentKana() {
    var kana = self.kana_displayed.innerHTML;

    return self.kana.key('kana', kana);
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

  function getRandomIndex() {
    return Math.floor(Math.random() * self.kana.length)
  }

  function getNextKana(kana) {
    var index;

    do {
      index = getRandomIndex();
    } while ( self.kana[index] == kana && self.kana.length != 1 )
    

    return self.kana[index];
  }

  function displayNextKana() {
    var kana = getNextKana(getCurrentKana());

    $(self.kana_displayed).html(kana.kana);
  }

  function addCorrectMatch(kana, romaji) {
    var message = 'Correct, sir, ' + kana.kana + ' is ' + kana.romaji;
    self.counter.addCorrect({ title: message });
    console.log(message);
  }

  function addFalseMatch(kana, romaji) {
    var message = 'Wrong, ' + kana.kana + ' is ' + kana.romaji;

    self.counter.addWrong({ title: message });
    console.log(message);
  }
}
