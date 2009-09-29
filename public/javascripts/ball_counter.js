BallCounter = function(list) {
  var self = this;
  this.list = list;

  reset();

  function reset() {
    list.innerHTML = '';
  }

  function addImage(src) {
    var image = document.createElement('img');
    image.src = src;

    var list_item = document.createElement('li');
    list_item.appendChild(image);

    self.list.appendChild(list_item);

    return list_item;
  }

  this.addCorrect = function(info) {
    var item = addImage('/images/balls/correct.png');

    item.info = info;
  }

  this.addWrong = function(info) {
    var item = addImage('/images/balls/wrong.png');

    item.info = info;
  }

  self.reset = reset;
}
