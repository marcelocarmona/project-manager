(function() {
  'use strict';

  angular
    .module('projectManager')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
