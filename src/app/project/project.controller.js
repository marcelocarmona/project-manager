(function() {
  'use strict';

  angular
    .module('projectManager')
    .controller('ProjectController', ProjectController);

  /** @ngInject */
  function ProjectController(projectService) {
    var vm = this;

    vm.projectList = projectService.listProject();

  }
})();
