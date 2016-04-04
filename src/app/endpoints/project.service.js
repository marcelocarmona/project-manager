(function() {
  'use strict';

  angular
    .module('projectManager')
    .factory('projectService', projectService);

  /** @ngInject */
  function projectService() {

    var currentId = 3;

    var projectList = [
    {id:'0',title: 'titulo0',description:'probadooo..', status:'approved', rfi:'123213', notes:'nota ...'},
    {id:'1',title: 'titulo1',description:'probadooo..', status:'pending', rfi:'123213', notes:'nota ...'},
    {id:'2',title: 'titulo2',description:'probadooo..', cancelled:'pending', rfi:'123213', notes:'nota ...'},
    {id:'3',title: 'titulo3',description:'probadooo..'}]

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
