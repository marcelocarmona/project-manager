(function() {
  'use strict';

  angular
    .module('projectManager')
    .controller('EditController', EditController);

  /** @ngInject */
  function EditController(projectService, $stateParams, $state) {

    var vm = this;

    vm.project = angular.copy(projectService.getProject($stateParams.id))

    /**
     * project update
     */
    vm.editProject = function(){
      projectService.editProject(vm.project)
      $state.go('^')
    }

  }
})();
