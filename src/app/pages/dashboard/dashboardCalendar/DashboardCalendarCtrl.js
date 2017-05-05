/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig,$scope,$http) {
    var dashboardColors = baConfig.colors.dashboard;

    $http.get('process.php').success(function(data) {
        $scope.data = data;

    var $element = $('#calendar').fullCalendar({
      //height: 335,
     events : data,
     /*events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ],*/
     // events: ([{"title":"ProjectName - Project Appointment to Jack Catalig","start":"2017-06-06T00:30:00+08:00","end":"2017-06-06T00:00:00+08:00","color":"dashboardColors.silverTree"},{"title":"(TNTV )ProjectName - Target Confirmation Date","start":"2017-06-07T00:30:00+08:00","end":"2017-06-07T23:30:00+08:00","color":"dashboardColors.silverTree"},{"title":"(TNTV )ProjectName - Shipment Date","start":"2017-06-08T00:30:00+08:00","end":"2017-06-08T23:30:00+08:00","color":"dashboardColors.silverTree"}]),
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },

      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true, // lalow "more" link when too many events
      
    });
    });
   // $('#calendar').fullCalendar('addEventSource', JSON.parse(data));
  }
})();