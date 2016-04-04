(function() {
  'use strict';

  angular
    .module('projectManager')
    .factory('projectService', projectService);

  /** @ngInject */
  function projectService() {

    var currentId = 3;

    var projectList = [
    {id:'0',title: 'Project 0',description:'description', status:'approved', rfi:'123213', notes:'nota'},
    {id:'1',title: 'Project 1',description:'description', status:'pending', rfi:'123213', notes:'nota'},
    {id:'2',title: 'Project 2',description:'description', status:'cancelled', rfi:'123213', notes:'nota'},
    {id:'3',title: 'Project 3',description:'description'}]

    var service = {
      addProject: addProject,
      getProject: getProject,
      listProject: listProject,
      editProject: editProject
    };

    return service;

    function addProject(project){
      currentId++;
      project.id = currentId;
      projectList.push(project)
    }

    function getProject(id){
      return projectList[id];
    }

    function listProject(){
      return projectList;
    }

    function editProject(project){
      projectList[project.id] = project;
    }
  }
})();
