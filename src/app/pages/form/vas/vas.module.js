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
          title: 'VAS Request',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('form.vas.integration', {
          url: '/ota_integration',
          templateUrl: 'app/pages/form/vas/ota_integration/otaIntegration.html',
          title: 'OTA Integration',
          sidebarMeta: {
            order: 10,
          },
        })
        .state('form.vas.selftest', {
          url: '/selftest',
          templateUrl: 'app/pages/form/vas/selftest/selftest.html',
          title: 'OTA Self-Test',
          sidebarMeta: {
            order: 10,
          },
        })
        .state('form.vas.marketserver', {
          url: '/marketserver',
          templateUrl: 'app/pages/form/vas/vas.html',
          title: 'OTA Market Server',
          sidebarMeta: {
            order: 20,
          },
        })
        .state('form.vas.servicetest', {
          url: '/servicetest',
          templateUrl: 'app/pages/form/vas/vas.html',
          title: 'Service Test',
          sidebarMeta: {
            order: 30,
          },
        })
        .state('form.vas.masspro', {
          url: '/masspro',
          templateUrl: 'app/pages/form/vas/vas.html',
          title: 'Mass Production',
          sidebarMeta: {
            order: 40,
          },
        });
  }
})();
