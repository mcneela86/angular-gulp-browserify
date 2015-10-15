'use strict';

var HomeCtrl = function($scope) {
  this.testVar = 'Yeah, Browserified. With UI-Router and \'controller as\'';

  this.list = {
  	"1": "item 1",
  	"2": "item 2",
  	"3": "item 3",
  	"4": "item 4"
  }
};

module.exports = HomeCtrl;