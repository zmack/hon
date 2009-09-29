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

  function extendItem(item, obj) {
    for( key in obj ) {
      item[key] = obj[key];
    }
  }

  this.addCorrect = function(info) {
    var item = addImage('/images/balls/correct.png');

    extendItem(item, info);
  }

  this.addWrong = function(info) {
    var item = addImage('/images/balls/wrong.png');

    extendItem(item, info);
  }

  

  self.reset = reset;
}
