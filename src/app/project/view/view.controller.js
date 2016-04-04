(function() {
  'use strict';

  angular
    .module('projectManager')
    .controller('ViewController', ViewController);

  /** @ngInject */
  function ViewController($stateParams) {

    var vm = this;

    vm.id = $stateParams.id;

  }
})();
