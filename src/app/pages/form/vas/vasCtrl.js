(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form.vas')
      .controller('VasCtrl', VasCtrl);

  /** @ngInject */
  function VasCtrl($scope) {
   var vm = this;

    vm.requestForm = {};
    vm.SoftwareDetails = {};

    // vm.arePersonalInfoPasswordsEqual = function () {
    //   return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    // };

    vm.submit = function() {
      isComplete();
      $scope.form && $scope.form.$setSubmitted(true);
    }

    vm.isComplete = function() {
      return $scope.form ? $scope.form.valid : true;
    }
  }

})();