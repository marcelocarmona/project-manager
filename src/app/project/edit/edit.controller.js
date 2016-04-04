(function() {
  'use strict';

  angular
    .module('projectManager')
    .controller('EditController', EditController);

  /** @ngInject */
  function EditController(projectService) {

    var vm = this;

    // vm.id = $stateParams.id;

    vm.editProject = function(project){
      projectService.editProject(project)
    }

  }
})();
