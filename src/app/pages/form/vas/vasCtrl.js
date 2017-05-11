(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form.vas')
      .controller('VasCtrl', VasCtrl);

  /** @ngInject */
  function VasCtrl($scope,$http) {
    $scope.errors = [];
    $scope.msgs = [];
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.requestForm = {};
    vm.SoftwareDetails = {};

    $scope.Submit = function() {
        console.log(vm.personalInfo);
        console.log(vm.productInfo);
        console.log(vm.requestForm);
        console.log(vm.SoftwareDetails);

        /* var data = { "model_name" : vm.personalInfo.modelName, "model_num" : vm.personalInfo.modelNumber, "qqAccount" : vm.personalInfo.qqAccount, "odm" : vm.personalInfo.odm, "email" : vm.personalInfo.email, "tester" : vm.personalInfo.tester, "chipset" : vm.productInfo.chipset };*/
         $.post("app/pages/form/vas/vasDb.php", vm.personalInfo);


      }
    // vm.arePersonalInfoPasswordsEqual = function () {
    //   return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    // };

/*    vm.submit = function() {
      isComplete();
      $scope.form && $scope.form.$setSubmitted(true);
    }

    vm.isComplete = function() {
      return $scope.form ? $scope.form.valid : true;
    }*/
  }

})();