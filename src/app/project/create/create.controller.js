(function() {
  'use strict';

  angular
    .module('projectManager')
    .controller('CreateController', CreateController);

  /** @ngInject */
  function CreateController(projectService, $stateParams, $state) {

    var vm = this;

    vm.project = {}

    /**
     * create a project
     */
    vm.createProject = function(){
      projectService.addProject(vm.project)
      $state.go('^')
    }

  }
})();
