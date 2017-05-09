/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form.vas', [
    'ui.select', 
    'ngSanitize'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    $stateProvider
        .state('form.vas', {
          url: '/vas',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'VAS Form',
          sidebarMeta: {
            order: 250,
          },
        })
        .state('form.vas.integration', {
          url: '/integration',
          templateUrl: 'app/pages/form/vas/integration/integration.html',
          title: 'OTA Integration',
          controller: 'VasCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('form.vas.selftest', {
          url: '/selftest',
          templateUrl: 'app/pages/form/vas/selftest/selftest.html',
          title: 'OTA SelfTest',
          sidebarMeta: {
            order: 10,
          },
        })
        .state('form.vas.marketserver', {
          url: '/marketserver',
          templateUrl: 'app/pages/form/vas/marketserver/marketserver.html',
          title: 'OTA Market Server',
          sidebarMeta: {
            order: 20,
          },
        })
        .state('form.vas.servicetest', {
          url: '/servicetest',
          templateUrl: 'app/pages/form/vas/servicetest/servicetest.html',
          title: 'Service Test',
          sidebarMeta: {
            order: 30,
          },
        })
        .state('form.vas.masspro', {
          url: '/massproduction',
          templateUrl: 'app/pages/form/vas/massproduction/massproduction.html',
          title: 'Mass Production',
          sidebarMeta: {
            order: 40,
          },
        })
        .state('form.vas.apptesting', {
          url: '/apptesting',
          templateUrl: 'app/pages/form/vas/apptesting/apptesting.html',
          title: 'Initial App Testing',
          sidebarMeta: {
            order: 50,
          },
        })
        .state('form.vas.fingerprint', {
          url: '/fingerprint',
          templateUrl: 'app/pages/form/vas/fingerprint/fingerprint.html',
          title: 'Fingerprint Request',
          sidebarMeta: {
            order: 60,
          },
        })
        .state('form.vas.barphones', {
          url: '/barphones',
          templateUrl: 'app/pages/form/vas/barphones/barphones.html',
          title: 'Barphones Porting',
          sidebarMeta: {
            order: 70,
          },
        });
  }
})();
