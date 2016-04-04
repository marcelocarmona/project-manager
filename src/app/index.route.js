(function() {
  'use strict';

  angular
    .module('projectManager')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('home.home', {
        url: 'home',
        templateUrl: 'app/main/home/home.html'
      }).state('home.project', {
        url: 'project',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'project'
      }).state('home.groups', {
         url: 'groups',
        templateUrl: 'app/main/default/default.html'
      }).state('home.activities', {
        url: 'activities',
        templateUrl: 'app/main/default/default.html'
      }).state('home.schedule', {
        url: 'schedule',
        templateUrl: 'app/main/default/default.html'
      }).state('home.timekeeping', {
        url: 'timekeeping',
        templateUrl: 'app/main/default/default.html'
      }).state('home.flows', {
        url: 'flows',
        templateUrl: 'app/main/default/default.html'
      }).state('home.default', {
        url: 'schedule',
        templateUrl: 'app/main/default/default.html'
      }).state('home.reporting', {
        url: 'reporting',
        templateUrl: 'app/main/default/default.html'
      });

    $urlRouterProvider.otherwise('/project');
  }

})();
