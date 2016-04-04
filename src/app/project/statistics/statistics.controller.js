(function() {
  'use strict';

  angular
    .module('projectManager')
    .controller('StatisticsController', StatisticsController);

  /** @ngInject */
  function StatisticsController() {

    var vm = this;

    vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
    vm.series = ['Series A', 'Series B'];
    vm.data = [
      [getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100)],
      [getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100), getRandomInt(0, 100)]
    ];
    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
})();
